const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
var ejs = require('ejs');
const configFile = require('../Config');
// const puppeteer = require('puppeteer');

let transporter = nodemailer.createTransport({
 // host: configFile.email_smtp_config.host,   //SMTP Host Address
 // port: configFile.email_smtp_config.port,    
    service: "hotmail",
    auth: {
      user: configFile.email_smtp_config.auth.user,   //Username
      pass: configFile.email_smtp_config.auth.pass    //Password
    }, 
    // tls: {
    //     rejectUnauthorized: false,
    //     ciphers: 'SSLv3'

    // }
  });



  module.exports.notifyMail = function (toEmail,subjectEmail,dataEmailTemplateBody){


        let messageData = {
          from: configFile.email_smtp_config.auth.user,
          to: toEmail,
          // cc:ccEmail,
          subject: subjectEmail,
          text: dataEmailTemplateBody
        }
        
        transporter.sendMail(messageData,(err, info) => {
          if (err) {
            let sentData = { messageData:messageData , err:err }
            return sentData
          } 
          else {
            let sentData = { messageData:messageData , info:info }
            return sentData
          }
        });
    
  }
