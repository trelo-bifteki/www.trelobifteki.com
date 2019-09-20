pipeline {
  agent any
  stages {

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
        sh 'npm run test:unit -- --ci'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
