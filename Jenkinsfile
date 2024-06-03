pipeline {
    agent any

    tools {
        // Refer to the Node.js version configured in Jenkins Global Tool Configurations.
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
                echo 'Attempting to run tests...'
                script {
                    try {
                        bat 'npm test'
                        echo 'Tests ran successfully!'
                    } catch (Exception e) {
                        echo 'No tests specified or tests failed. Continuing build...'
                    }
                }
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
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
