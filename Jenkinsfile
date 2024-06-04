pipeline {
  agent any
  
  tools {
    nodejs 'NodeJS-16.20.1'
  }

  stages {
    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo 'Installing dependencies...'
        bat 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        echo 'Running tests...'
        bat 'npm test'
      }
    }

    stage('Build Project') {
      steps {
        echo 'Building project...'
        bat 'npm run build'
      }
    }
  }

  post {
    always {
      echo 'Pipeline execution complete!'
    }
    success {
      echo 'All stages succeeded!'
    }
    failure {
      echo 'One or more stages failed. Check logs for details.'
    }
  }
}
