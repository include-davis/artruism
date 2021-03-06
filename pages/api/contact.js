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
        subject: `${req.body.firstName} ${req.body.lastName} - ${req.body.reason}`,
        html: `<div>Additional notes: ${req.body.notes}</div><p>${req.body.firstName} ${req.body.lastName} is reachable at the following email and/or number: ${req.body.email} ${req.body.number}</p>`
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    res.status(200)
    
  }
