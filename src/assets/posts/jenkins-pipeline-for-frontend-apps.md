![banner](/static/banner_nodejs_jenkins.png "Nodejs and Jenkins logo")


## About

After working on developing the build pipelines for my company, I noticed how
modern building tools can help with the automation of important tasks in
frontend development.

I also migrated my personal website to use Jenkins for automatically building
and deploying it. This guide explains how I was able to do it.

The technology stack I am using for my website is the following

*   NodeJs
*   Typescript
*   NPM
*   Eslint
*   Jest
*   Cypress

## Why Jenkinsfile

I personally prefer to give freedom to developers let them modify the building
process as they need. Each git project also contains the Jenkinsfile in the
root folder. We setup the jenkins project as following:

*   Add a Pipeline option to job
*   Set "Pipeline Script from SCM"

I have worked in the past for projects where the building process and Jenkins
were part of the admin team. As frontend developers we had difficulties to
introduce new processes and steps in the pipeline and it constrained us to use
new technologies we wanted.

## Install dependencies

It is a common *but wrong* practice to install dependencies in CI pipelines using
the command:

    npm install

This is actually wrong, since npm install _may_ install a newer minor release
for either your dependencies and/or sub-dependencies.

In a nutshell: This way it is possible that your build works on your developer
laptop but it fails to compile in jenkins, simply because `npm install` installed
a minor sub-dependency that had a breaking change.

In order to avoid this issue simple use:

    npm ci

and add `package-lock.json` in GIT. Believe me, this is a life savior! It will
_always_ install the exact package and versions listed in this file.

## Audit dependencies

There is no need for anything else than:

    npm audit --parseable --production

This way we are sure that main dependencies have no security issues. I am not
checking for any vulnerabilities in dev packages since they are not directly
used and it is not possible at the moment to define a _threshold_ to exclude
minor issues.

I am also checking if packages are outdated by executing the command:

    npm outdated || exit 0

This way the pipeline won't fail if the packages are outdated. It is also not
possible here to define a

## Check linting

_Eslint_ is my favorite option for lint and format checks, since the
integration with IDEs and console command is _almost perfect_!

But Typescript is only part of the code I am writing for my website. My goal
was to use linting also for Sass and markdown. For this reason I also installed
[stylelint](https://stylelint.io/) and
[remark](https://github.com/remarkjs/remark-lint).

Another important point is the integration with _git hooks_. My personal goal is
to catch as many errors as possible before merging into master branch.

I used for this reason [husky](https://github.com/typicode/husky).

In short this is my list of all linting programs I am using:

*   [eslint](https://eslint.org/)
*   [husky](https://github.com/typicode/husky)
*   [stylelint](https://stylelint.io/)
*   [remark](https://github.com/typicode/husky)

## Unit testing

A unit testing _with coverage_ is another safety lock for capturing bugs before entering
production.

The following software has been used for this step:

*   jest
*   @vue/cli-plugin-unit-jest
*   jest-junit
*   Coberture jenkins plugin

After successfully integrating Jenkins with Jest you will get a nice overview of the test
results directly into Jenkins:

![Screenshot 1](/static/screenshot_jenkins_1.jpg "Screenshot Jenkins and tests")

## E2E testing

I used an end-to-end testing for checking the basic integration.

## Complete example

This is the actual pipeline I am using in my
[project](https://github.com/trelo-bifteki/www.trelobifteki.com/). Feel free to
check it out and experiment with it!


```groovy
pipeline {
  agent any
  stages {
    stage('Check for vulnerabilities') {
      steps {
        sh 'npm audit --parseable --production'
        sh 'npm outdated || exit 0'
      }
    }

    stage('download dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Check linting') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Check unit:test') {
      steps {
        sh 'npm run test:unit -- --ci --coverage'
      }
      post {
        always {
          junit 'junit.xml'
          cobertura coberturaReportFile: 'coverage/cobertura-coverage.xml'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Check unit:e2e') {
      steps {
        sh 'npm run test:e2e -- --headless --url https://www.trelobifteki.com --config video=false'
      }
    }
  }
}
```
