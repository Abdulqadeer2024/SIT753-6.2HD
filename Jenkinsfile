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

        stage('Lint Code') {
            steps {
                echo 'Linting the code...'
                script {
                    try {
                        bat 'npm run lint'
                    } catch (Exception e) {
                        echo 'Linting failed or no lint script available, continuing...'
                    }
                }
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

        stage('Code Quality Analysis') {
            steps {
                echo 'Analyzing code quality...'
                bat 'echo "Static code analysis tool run here"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to test environment...'
                bat 'echo "Deployment commands run here"'
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing to production environment...'
                bat 'echo "Release commands run here"'
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up monitoring and alerting...'
                bat 'echo "Setup monitoring and alerting here"'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            bat 'docker-compose down'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
