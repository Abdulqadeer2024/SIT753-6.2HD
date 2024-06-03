pipeline {
    agent any

    tools {
        nodejs "NodeJS-16.20.1"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('path/to/your/app') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                dir('path/to/your/app') {
                    bat 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('path/to/your/app') {
                    bat 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t yourusername/blog-app ."
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            bat "docker rmi yourusername/blog-app"
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
