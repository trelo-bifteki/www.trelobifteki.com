## About

After working on developing the build pipelines for my company, I noticed how
modern building tools can help with the automation of important tasks in
frontend development

Frontend development works currently with the following technologies:
*   NodeJs
*   NPM
*   Eslint
*   Prettier

## Install dependencies

It is a common *but wrong* practice to install practices in CI pipelines using
the command:

    npm install

This is actually wrong, since npm install _may_ install a newer minor release
for either your dependencies and/or sub-dependencies.

In a nutshell: This way it is possible that your build works on your developer
laptop but it fails to compile in jenkins, simply because `npm install` installed
a minor sub-dependency that had a breaking change.

In order to avoid this issue simple use:

    npm ci

and add `package-lock.json` in GIT. Believe me, this is a life savior! It will _always_
install the exact package and versions listed in this file.

## Audit dependencies

There is no need for anything else than:

    npm audit --parseable --production

This way we are sure that main dependencies have no security issues


## Check linting

_Eslint_ is my favorite option for lint and format checks, since the
integration with IDEs and console command is _almost perfect_!

Another important point is the integration with _git hooks_. My personal goal is
to catch as many errors as possible before commits and merging into master branch

## Unit testing

A unit testing _with coverage_ is another safety lock for capturing bugs before entering
production.

## E2E testing



## Example

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
        // sh 'npm outdated' not used due fontello-webpack-plugin
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
  }
}
```
