pipeline {
    agent any

    tools {
        nodejs 'NodeJS-12.x'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Abdulqadeer2024/SIT753-6.2HD.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Replace sh with bat for Windows compatibility
                bat 'npm install'
                dir('client') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Backend') {
            steps {
                // Replace sh with bat for Windows compatibility
                bat 'npm run build'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    // Replace sh with bat for Windows compatibility
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                // Replace sh with bat for Windows compatibility
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Modify or add Windows compatible deployment commands
                bat 'echo Deploy command here'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
