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
                // Use 'bat' for Batch commands in Windows
                bat 'npm install'
                dir('client') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Backend') {
            steps {
                // Use 'bat' instead of 'sh' for Batch commands in Windows
                bat 'npm run build'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                // Assuming npm test is set up to run tests in your package.json
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Example of a Windows batch command for deployment
                // Ensure you have the correct command here for your deployment
                bat 'echo Deployment step here'
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
