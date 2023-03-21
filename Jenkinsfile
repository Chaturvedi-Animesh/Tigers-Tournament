node {
  stage("Clone the project") {
    git branch: 'demo/jenkins', url: 'https://github.com/Chaturvedi-Animesh/Tigers-Tournament.git'
  }

  stage("Compilation") {
    sh "npm insatll"
    
  }

  stage("Building and Deployment") {
    stage("Deployment") {
    keepRunning{
      sh 'nohup npm start &'
    }}
  }
}