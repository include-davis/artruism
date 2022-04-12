// TODO: If deploying app to live site, include password as environmental variable
// If you're an officer and you need it, ask Uma Shankar for the password on discord

export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'artruismdavis@gmail.com',
              pass: process.env.password,
           },
      secure: true,
    });
    
    const mailData = {
        from: 'artruismdavis@gmail.com',
        to: 'artruismdavis@gmail.com', //TODO: Replace this with the email of the appropriate Artruism officer
        subject: `Message From ${req.body.name}`,
        text: "Reason for sending message: " + req.body.reason + " | Message: " + req.body.message + " | Notes: " + req.body.notes  "Sent from: " + req.body.firstName + " " + req.body.lastName + " " + req.body.email + " " + req.body.number,
        //check that these should all be in email and that formatting is fine
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    res.status(200)
    
  }
