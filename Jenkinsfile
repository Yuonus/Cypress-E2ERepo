pipeline {
    agent any

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/tests/**/**.cy.js", description: "Enter the script path that you would like to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox', 'electron'], description: "Select the browser you would like to execute your test")
    }

    // options {
    //     ansiColor('xterm')
    // }

    stages {
        stage('Build') {
            steps {
                echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying') {
            steps {
                echo "Deploying the application updates"
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: true, 
                reportDir: 'cypress/report', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: '', 
                useWrapperFileDirectly: true
            ])
        }
    }
}
