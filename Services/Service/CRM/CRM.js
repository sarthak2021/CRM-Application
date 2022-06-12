var express = require('express');
var router = express.Router();
var connect = require('../../Data/Connect');
var datamodel = require('../../Data/DataModel');
var dataaccess = require('../../Data/DataAccess');
var dataconn = require('../../Data/DataConnection');
var mailer = require('../../Common/Mailer')


var routes = function () {


    return router;
};
//mailer api
router.route('/sendemail')
    .post(function (req, res) {
        // try {
            let toEmail =  req.body.toEmail
            let subjectEmail =  req.body.subjectEmail
            let dataEmailTemplateBody =  req.body.dataEmailTemplateBody
            
            mailer.notifyMail(toEmail,subjectEmail,dataEmailTemplateBody)
                // .then(function (result) {
                    // if (result != null) {
                        return res.status(200).json({ Success: true, Message: 'Mail Sent Successfully!' });
                    // } else {
                    //     return res.status(200).json({ Success: false, Message: 'Failed! to send Email' });
                    // }
                // })
        // }
        // catch (err) {
        //     dataconn.ErrorLog('CRMService', 'sendemail', err);
        //     res.status(200).json({ Success: false, Message: 'send email API failed.', Data: null });
        // }
    });


router.route('/addcrm')
    .post(function (req, res) {
        try {
            const CRM = datamodel.CRM();
            let values = ({
                    CustomerID: req.body.CustomerID,
                    ConversationInfo: req.body.ConversationInfo,
                    ContactDateTime: req.body.ContactDateTime
            });
            dataaccess.Create(CRM, values)
                .then(function (result) {
                    if (result != null) {
                        return res.status(200).json({ Success: true, Message: 'Successfully Added CRM Information.' });
                    } else {
                        return res.status(200).json({ Success: false, Message: ' Failed! to Add CRM  Information' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('CRMService', 'addcrm', err);
            res.status(200).json({ Success: false, Message: 'Add CRM API failed.', Data: null });
        }
    });


    // get crmdata
    router.route('/getcrminfo')
    .post(function (req, res) {
        try {
            const CRM = datamodel.CRM();
            let param = {
                where: {
                    CustomerID: req.body.CustomerID
                }, attributes: ['ConversationInfo', 'ContactDateTime', 'CustomerID']
            };
            dataaccess.FindAll(CRM, param)
                .then(function (result) {
                    if (result != null) {
                        return res.status(200).json({ Success: true, data: result });
                    } else {
                        return res.status(200).json({ Success: false, Message: 'Failed! to get crm info' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('CRMService', 'getcrminfo', err);
            res.status(200).json({ Success: false, Message: 'get Crm info API failed.', Data: null });
        }
    });
module.exports = routes;