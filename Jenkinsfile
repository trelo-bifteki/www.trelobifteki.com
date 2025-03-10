pipeline {
  agent {
    docker {
      image "node:18-alpine"
      args "-v /var/www/trelobifteki.com/:/dist -v /media/disk/jenkins/.npm:/root/.npm"
    }
  }
  environment {
    HOME = '/var/lib/jenkins/workspace/www.trelobifteki.com'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Check for vulnerabilities') {
      steps {
        sh 'npm audit --parseable --production || exit 0'
      }
    }

    stage('download dependencies') {
      steps {
        sh 'npm ci'
        sh 'npm outdated || exit 0'
      }
    }

    stage('Check linting') {
      steps {
        sh 'npm run lint'
	      sh 'npm run lint:markdown'
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

    stage('Copy to distribution folder') {
      steps {
        sh "rm -r /dist/* && cp -R dist/* /dist"
        /* sh 'npm run test:e2e -- --headless --url https://www.trelobifteki.com --config video=false || exit 0' */
      }
    }

    stage('Check unit:e2e') {
      steps {
        echo 'omit this for now...'
        /* sh 'npm run test:e2e -- --headless --url https://www.trelobifteki.com --config video=false || exit 0' */
      }
    }
  }
}
