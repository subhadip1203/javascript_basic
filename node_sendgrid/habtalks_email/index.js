const {sendEmail_client , sendEmail_management} = require('./sendgrid')





async function send_email_new_appointment(data){
  if(data.subject && data.date &&  data.slot &&  data.name &&  data.email   ){
    
    // sending email to client
    await sendEmail_client('./email_tempaltes/appointments/client_appointment_success.ejs' , data)
    
    // sending email to management
    await sendEmail_management('./email_tempaltes/appointments/management_appointment_success.ejs' , data)
  }
  
}



async function habtalks_email_send(data){

  //  formating date 
  if(data.date) {
    const monthname = [" " , "January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
    const dateArr = data.date.split("-");
    const month_no = parseInt(dateArr[1])
    if(dateArr[2] > 0 && month_no > 0 && dateArr[0] > 2021) {
      data.date = dateArr[2]+' '+monthname[month_no]+' , '+dateArr[0]
    }
  }

  // sending email as per subject
  if(data.subject == 'habtalks : New Appointmemnt') {
    await send_email_new_appointment(data)
  }
  
}

module.exports = habtalks_email_send
