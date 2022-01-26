const sgMail = require('@sendgrid/mail')
const ejs = require('ejs')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


async function sendEmail_client (filepath , data) {
  try{
    var HTML_body =  await ejs.renderFile(filepath, data)
    const msg = {
      to: data.email , // Change to your recipient
      from: process.env.EMAIL_SENDER, // Change to your verified sender
      subject: data.subject,
      text: HTML_body,
      html: HTML_body,
    }
  
    const response = await sgMail.send(msg)
    // console.log(response[0].statusCode)
    if(response[0].statusCode == 200 || response[0].statusCode == 201 || response[0].statusCode == 202 ) {
      console.log("email sent")
    }
    else{
      console.log("email not sent")
    }
  }
  catch(err){
    console.log(err)
  }
}

async function sendEmail_management (filepath , data) {
  try{
    var HTML_body =  await ejs.renderFile(filepath, data)
    const msg = {
      to: process.env.MANAGEMENT_RECEIVER, // Change to your recipient
      from: process.env.EMAIL_SENDER, // Change to your verified sender
      subject: data.subject,
      text: HTML_body,
      html: HTML_body,
    }
  
    const response = await sgMail.send(msg)
    // console.log(response[0].statusCode)
    if(response[0].statusCode == 200 || response[0].statusCode == 201 || response[0].statusCode == 202 ) {
      console.log("email sent")
    }
    else{
      console.log("email not sent")
    }
  }
  catch(err){
    console.log(err)
  }
}

module.exports =  { sendEmail_client , sendEmail_management } ;
