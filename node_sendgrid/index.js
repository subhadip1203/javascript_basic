require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const app = express()
const {sendEmail_client , sendEmail_management} = require('./sendgrid')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/send_email', async (req, res) => {
  res.send('email send')
  
  const data = {
    subject :'habtalks : New Appointmemnt',
    date: '12 / 01 /2022',
    slot: '11:00 am - 11:45 am',
    name: 'subhadip pahari',
    email: 'subhadipsjsc@gmail.com'
  }

  // sending email to client
  await sendEmail_client('./email_tempaltes/appointments/client_appointment_success.ejs' , data)
  
  // sending email to management
  await sendEmail_management('./email_tempaltes/appointments/management_appointment_success.ejs' , data)
})


app.get('/email_view', async (req, res) => {
  const data = {
    date: '12 / 01 /2022',
    slot: '11:00 am - 11:45 am',
    name: 'subhadip pahari'
  }
  var HTML_body =  await ejs.renderFile('./email_tempaltes/appointments/appointment_success.ejs', data)
  res.send(HTML_body)
})


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})