var nodemailer = require('nodemailer');
var defaultConfig = require('../config/defaultConfig')

var transporter = nodemailer.createTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    // secure: process.env.SECURE,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    // user: process.env.MAIL_USER,
    // pass: process.env.MAIL_PSD
    user: defaultConfig[defaultConfig.env].gmailId,
    pass: defaultConfig[defaultConfig.env].gmailPassword
  }
});

const sendWelcomeEmail = (email , name) => {
var mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Welcome to Sanyog',
    html: '<h2>hii '+ name +'</h2><p>Welcome to Sanyog</p>'
    };
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

const sendOtpInMail = (email , otp) => {
    var mailOptions = {
        from: process.env.MAIL_USER,
        to: email,
        subject: 'Sanyog app',
        html: '<p>Your otp is:'+ otp +'</p>'
        };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

module.exports = {
    sendWelcomeEmail,
    sendOtpInMail
}