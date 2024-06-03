pipeline {
    agent any

    tools {
        nodejs 'NodeJS-16.20.1'
    }

    stages {
        stage('Checkout SCM') {
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
        stage('Build Project') {
            steps {
                echo 'Building project...'
                bat 'npm run build'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete!'
            cleanWs()
        }
        success {
            echo 'Build and test stages succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
