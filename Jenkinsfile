pipeline {
    agent any

    parameters {
        string(
            name: 'SPEC', 
            defaultValue: "", 
            description: "Optional: Enter a spec path if you want to run only a specific test (leave blank to run all)"
        )
        choice(
            name: 'BROWSER', 
            choices: ['chrome', 'edge', 'firefox', 'electron'], 
            description: "Select the browser you would like to execute your test"
        )
    }

    stages {
        stage('Build') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    echo "Building the application..."
                }
            }
        }

        stage('Testing') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    bat "npm ci"

                    script {
                        if (params.SPEC?.trim()) {
                            // Run only the specified spec
                            bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
                        } else {
                            // Run all tests
                            bat "npx cypress run --browser ${BROWSER}"
                        }
                    }
                }
            }
        }

        stage('Deploying') {
            steps {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    echo "Deploying the application updates..."
                }
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
