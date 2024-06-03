pipeline {
    agent any

    tools {
        // Define tools if needed, e.g., nodejs 'NodeJS-16.x'
    }

    environment {
        // Define environment variables if needed, e.g., DOCKER_IMAGE = 'yourusername/blog-app'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('path/to/your/app') {
                    // Adjust the path according to your project structure
                    script {
                        // Using script to handle potential npm install issues
                        def npmInstallStatus = sh(script: 'npm install', returnStatus: true)
                        if (npmInstallStatus != 0) {
                            error("Failed to install npm dependencies")
                        }
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Building Docker image
                    docker.build('yourusername/blog-app')
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            // Add post-build cleanup steps if necessary
        }
        failure {
            echo 'The build failed.'
        }
        success {
            echo 'The build was successful.'
        }
    }
}
