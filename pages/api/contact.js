export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'demo@demo.gemail',
             // To use password: create .env file. In the file, write (without quotes)
             // "password=whateverthepasswordis"
             // include the .env in your gitignore
              pass: process.env.password,
           },
      secure: true,
    });
    
    const mailData = {
        from: 'artruismdavis@gmail.com',
        to: 'your email',
        subject: `Message From ${req.body.name}`,
        text: "Reason for sending message: " + req.body.reason + " | Message: req.body.message + " | Sent from: " + req.body.firstname + " " + req.body.lastname + " " + req.body.email + " " + req.body.number,
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
  
    // console.log(req.body)
    
  }
