var express = require('express');
var router = express.Router();
var connect = require('../../Data/Connect');
var datamodel = require('../../Data/DataModel');
var dataaccess = require('../../Data/DataAccess');
var dataconn = require('../../Data/DataConnection');

var routes = function () {


    return router;
};

router.route('/login')
    .post(function (req, res) {
        try {
            const UserMst = datamodel.UserMst();
            let param = {
                where: {
                    EmailId: req.body.EmailId,
                    Password: req.body.Password
                }
            };
            dataaccess.FindOne(UserMst, param)
                .then(function (result) {
                    if (result != null) {
                        return res.status(200).json({ Success: true, Message: 'Login Successful.' });
                    } else {
                        return res.status(200).json({ Success: false, Message: 'Login Failed! Please provide valid crediantials.' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('LoginService', 'login', err);
            res.status(200).json({ Success: false, Message: 'Login API failed.', Data: null });
        }
    });

module.exports = routes;