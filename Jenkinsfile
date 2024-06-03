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
                bat 'npm run lint'
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
                bat 'sonar-scanner' // Requires SonarQube scanner to be configured
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to test environment...'
                bat 'docker-compose up -d' // Requires Docker Compose file configured
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing to production environment...'
                bat 'echo "Release commands run here"' // Replace with actual release command
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up monitoring and alerting...'
                bat 'echo "Setup monitoring and alerting here"' // Replace with actual monitoring setup command
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            bat 'docker-compose down' // Optional: clean up Docker environment
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
