pipeline {
    agent any

    tools {
        nodejs 'NodeJS-16.20.1'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Abdulqadeer2024/SIT753-6.2HD.git'
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
        }
        success {
            echo 'Build and tests succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
