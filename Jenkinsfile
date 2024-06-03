pipeline {
    agent any

    tools {
        nodejs 'NodeJS-16.20.1'  // Make sure this version is configured in Jenkins
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

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
                junit 'reports/junit.xml'  // Adjust path according to where Jest outputs the XML report
            }
        }

        stage('Build Project') {
            steps {
                echo 'Building project...'
                bat 'npm run build'  // Executes the build script defined in package.json
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution complete!'
        }
        success {
            echo 'All stages succeeded!'
        }
        failure {
            echo 'At least one stage failed. Check logs for details.'
        }
    }
}
