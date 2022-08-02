const functions = require('@google-cloud/functions-framework')

functions.http('hello-github-cicd', (req, res) => {
  res.send('Hello GitHub CICD!')
})