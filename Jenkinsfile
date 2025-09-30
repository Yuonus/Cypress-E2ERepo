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
                echo "Installing Dependencies"
                bat "npm i"
            }
        }
        stage('Testing') {
            steps {
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                // bat "npx cypress run --browser ${BROWSER} --spec ${SPEC} || echo 'Tests failed, check reports'" // not recommended at all.
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
                reportDir: 'cypress/reports/html', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: '', 
                useWrapperFileDirectly: true
            ])

            
        }
    }
}
