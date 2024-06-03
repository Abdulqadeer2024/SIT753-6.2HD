pipeline {
    agent any

    tools {
        // Change this to a Node.js version that supports ES2020 features like optional chaining.
        nodejs 'NodeJS-14.x'
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
