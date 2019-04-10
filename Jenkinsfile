pipeline {
  agent any
  environment {
    HOME = '.'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }
  }
}
