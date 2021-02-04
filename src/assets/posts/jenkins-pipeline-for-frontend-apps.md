## About

After working on developing the build pipelines for my company, I noticed how modern building tools can help with the automation of important tasks in frontend development.

I also migrated my personal website to use Jenkins for automatically building and deploying it. This guide explains how I was able to do it.

The technology stack I am using for my website is the following

*   Vue.js
*   Typescript
*   NPM
*   Eslint
*   Jest
*   Cypress

## Why Jenkinsfile

I personally prefer to give freedom to developers and let them modify the building process as they need. Each git project also contains the Jenkinsfile in the root folder. We setup a Jenkins project as following:

*   Add a Pipeline option to job
*   Set "Pipeline Script from SCM"

I have worked in the past for projects where the building process and Jenkins were part of the admin team. As frontend developers we had difficulties to introduce new processes and steps in the pipeline and it constrained us to use new technologies we wanted.

## Install dependencies

It is a common *but wrong* practice to install dependencies in CI pipelines using the following command:

    npm install

This is actually wrong, since npm install _may_ install a newer minor release for either your dependencies and/or sub-dependencies.

In a nutshell: This way it is possible that your build works on your developer laptop but it fails to compile in Jenkins, simply because `npm install` installed a minor sub-dependency that had a breaking change.

In order to avoid this issue simple use:

    npm ci

and add `package-lock.json` in GIT. Believe me, this is a life savior! It will _always_ install the exact package and versions listed in this file.

## Audit dependencies

There is no need for anything else than:

    npm audit --parseable --production

This way we are sure that main dependencies have no security issues. I am not checking for any vulnerabilities in dev packages since they are not directly used and it is not possible at the moment to define a _threshold_ to exclude minor issues.

I am also checking if packages are outdated by executing the command:

    npm outdated || exit 0

This way the pipeline won't fail if the packages are outdated. It is also not possible here to define a threshold here.

## Check linting

_Eslint_ is my favorite option for linting and format checks, since the
integration with IDEs and console command is _almost perfect_!

If you are using _vue-cli_ to setup your project, we simply need to execute in Jenkinsfile:

    npm run lint

## Unit testing

A unit testing _with coverage_ is another safety lock for capturing bugs before entering
production.

The following software has been used for this step:

*   jest
*   @vue/cli-plugin-unit-jest
*   jest-junit
*   Coberture jenkins plugin

Simple execute the following:

    npm run test:unit -- --ci --coverage

After successfully integrating Jenkins with Jest you will get a nice overview of the test
results directly into Jenkins:

![Screenshot 1](https://dev-to-uploads.s3.amazonaws.com/i/gpc91qroet7m9r53yjn9.jpg)

## E2E testing

I used an end-to-end testing as a smoke test for my website. This way I am sure that the website was deployed successfully.

I chose for this case _nightwatch_ and installed it using vue-cli:

    vue add e2e-nightwatch

After building the application, I made the _dist_ directory as the root directory for my web server.
Once it is successfully build, I can execute the smoke test as following:

    npm run test:e2e -- --headless --url https://www.trelobifteki.com --config video=false

Some points there:

*   I used `--headless` since this is an automated test (no interaction is required)
*   I am using the actual URL of my website for end-to-end testing
*   I deactivated video recording (since I don't need it)

## Complete example

This is the actual pipeline I am using in my [project](https://github.com/trelo-bifteki/www.trelobifteki.com/). Feel free to check it out and experiment with it!

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
