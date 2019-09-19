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

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
