pipeline {
    agent any

    tools {
        // Specify the Node.js version configured in Jenkins
        nodejs 'NodeJS-12.x'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // This step checks out the code from your Git repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install NPM dependencies using 'npm install'
                echo 'Installing dependencies...'
                bat 'npm install' // Use 'bat' for Windows. Replace with 'sh' for Unix/Linux.
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests using your npm test script
                echo 'Running tests...'
                bat 'npm test' // Use 'bat' for Windows. Replace with 'sh' for Unix/Linux.
            }
        }

        stage('Build Project') {
            steps {
                // Build your project using your npm build script
                echo 'Building project...'
                bat 'npm run build' // Use 'bat' for Windows. Replace with 'sh' for Unix/Linux.
            }
        }
    }

    post {
        always {
            // This block executes after the pipeline run, regardless of the outcome
            echo 'Pipeline execution complete!'
        }
        success {
            // This block executes only if the pipeline run is successful
            echo 'Pipeline succeeded!'
        }
        failure {
            // This block executes only if the pipeline run fails
            echo 'Pipeline failed!'
        }
    }
}
