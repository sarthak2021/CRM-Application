var express = require('express');
var router = express.Router();
var connect = require('../../Data/Connect');
var datamodel = require('../../Data/DataModel');
var dataaccess = require('../../Data/DataAccess');
var dataconn = require('../../Data/DataConnection');

var routes = function () {


    return router;
};

router.route('/register')
    .post(function (req, res) {
        try {
            const UserMst = datamodel.UserMst();
            let param = {
                where: {
                    EmailId: req.body.EmailId,
                         }
            };
            dataaccess.FindAll(UserMst, param)
                .then(function (result) {
                    if (result == null) {
                        console.log(result == null)
                            return res.status(200).json({ Success: false, Message: 'User Already Exist Please Login.', data: result });
                    } else {
                        let values = {
                            EmailId: req.body.EmailId,
                            FullName: req.body.FullName,
                            Password: req.body.Password
                        };
                        dataaccess.Create(UserMst, values)
                            .then(function (result) {
                                if (result != null) {
                                    return res.status(200).json({ Success: true, Message: 'Registration Successful.' });
                                } else {
                                    return res.status(200).json({ Success: false, Message: 'Registration Failed' });
                                }
                            })
                    }
                })
        }

        catch (err) {
            dataconn.ErrorLog('RegisterService', 'register', err);
            res.status(200).json({ Success: false, Message: 'Register User API failed.', Data: null });

        }
    });

module.exports = routes;