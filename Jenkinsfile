pipeline {
    agent any

    tools {
        nodejs 'NodeJS-16.20.1'
    }

    environment {
        DOCKER_IMAGE = 'yourusername/blog-app'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Abdulqadeer2024/SIT753-6.2HD.git'
            }
        }
        
        stage('Build Project') {
            steps {
                script {
                    // Building Docker Image
                    bat "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                // This can run Jest or other Node.js test frameworks
                bat 'npm test'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                // Running Selenium tests
                bat 'npm run selenium-test'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            bat 'docker rmi ${DOCKER_IMAGE}'
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
