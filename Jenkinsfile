pipeline {
    agent any

    tools {
        nodejs 'NodeJS-16.20.1' // Ensure this matches the name of your Node.js installation in Jenkins
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git 'https://github.com/Abdulqadeer2024/SIT753-6.2HD.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS-16.20.1', type: 'NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                    bat 'node -v' // Check Node.js version to verify the correct tool is used
                }
                bat 'npm install'
            }
        }
        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test -- --passWithNoTests'
            }
        }
        stage('Run Selenium Tests') {
            steps {
                bat 'npm run selenium-test'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
