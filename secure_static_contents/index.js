const express = require('express')
const path = require('path')


const app = express()


app.get('/', async(req, res) => {
  res.send({ping : 1 })
})


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})