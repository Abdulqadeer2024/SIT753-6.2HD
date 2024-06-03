pipeline {
    agent any

    tools {
        nodejs 'NodeJS-16.20.1' // Make sure this version is configured in Jenkins
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
                // Example placeholder, configure as needed
                bat 'echo "Run your static code analysis tool here"'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to test environment...'
                // Example placeholder, configure as needed
                bat 'echo "Deploy your application using your chosen tool"'
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing to production environment...'
                // Example placeholder, configure as needed
                bat 'echo "Promote the application to production"'
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                echo 'Setting up monitoring and alerting...'
                // Example placeholder, configure as needed
                bat 'echo "Configure monitoring and alerting tools"'
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
