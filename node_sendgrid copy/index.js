require('dotenv').config()
const express = require('express')
const cors = require('cors');
const ejs = require('ejs')
const app = express()

app.use(cors());
app.use(express.json()); // bodyparser : old
app.use(express.urlencoded({ extended: false }));

const habtalks_email_send = require("./habtalks_email")


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/habtalks', async (req, res) => {
  res.send({success:1})
  console.log(req.body.subject)
  await habtalks_email_send({...req.body})
})


// app.get('/email_view', async (req, res) => {
//   const data = {
//     date: '12 / 01 /2022',
//     slot: '11:00 am - 11:45 am',
//     name: 'subhadip pahari'
//   }
//   var HTML_body =  await ejs.renderFile('./email_tempaltes/appointments/appointment_success.ejs', data)
//   res.send(HTML_body)
// })


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})