pipeline {
    agent any
    tools {
        nodejs 'NodeJS-16.20.1'  // Ensure this tool is configured in your Jenkins with the correct version
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm  // Checks out source code from the repository
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'  // Installs npm packages
            }
        }
        stage('Build Project') {
            steps {
                echo 'Building project...'
                bat 'npm run build'  // Executes the build script defined in package.json
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete!'
        }
        success {
            echo 'Tests succeeded!'
        }
        failure {
            echo 'Tests failed. Check logs for details.'
        }
    }
}
