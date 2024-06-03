pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS-12.x', type: 'NodeJSInstallation'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Abdulqadeer2024/SIT753-6.2HD.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Backend') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Add deployment steps here, e.g., Docker commands or pushing to a server
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
