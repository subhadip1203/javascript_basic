const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json()) 

app.get('/', function (req, res) {
  setTimeout(()=>{
    // res.send({success:1, message: 'ok'})
    res.send({success: 1, message:'ok' })
  },4000)
  
})

app.post('/p', function (req, res) {
  setTimeout(()=>{
    res.send(req.body)
  },4000)
  
})
 
app.listen(3001, ()=>{ console.log("server running at port http://localhost:3001")})