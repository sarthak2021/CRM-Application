var express = require('express');
var router = express.Router();
var connect = require('../../Data/Connect');
var datamodel = require('../../Data/DataModel');
var dataaccess = require('../../Data/DataAccess');
var dataconn = require('../../Data/DataConnection');

var routes = function () {


    return router;
};
// Add customer info
router.route('/addcustomerinfo')
    .post(function (req, res) {
        try {
            const CustomerInformationMst = datamodel.CustomerInformationMst();
            let param = {
                EmailId: req.body.EmailId,
                Name: req.body.Name,
                Address: req.body.Address,
                Phone: req.body.Phone,
                GSTno: req.body.GSTno,
                FrequencyofAutomatedReminder: req.body.FrequencyofAutomatedReminder
            };
            dataaccess.Create(CustomerInformationMst, param)
                .then(function (result) {
                    if (result != null) {
                        return res.status(200).json({ Success: true, Message: 'Customer Information Added Successfully.' });
                    } else {
                        return res.status(200).json({ Success: false, Message: 'Failed to Add Customer Information' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('CustomerinfoService', 'addcustomerinfo', err);
            res.status(200).json({ Success: false, Message: 'Add Customer Information failed.', Data: null });
        }
    });

    router.route('/getcustomerbyid/:CustomerID')
    .post(function (req, res) {
        try {
            const CustomerInformationMst = datamodel.CustomerInformationMst();
            let param = {
                where: {
                CustomerID: req.params.CustomerID
                }
            };
            dataaccess.FindOne(CustomerInformationMst, param)
                .then(function (result) {
                    if (result != null) {
                        return res.status(200).json({ Success: true, Data: result });
                    } else {
                        return res.status(200).json({ Success: false, Message: 'Failed to get Customer Information by ID' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('CustomerinfoService', 'getcustomerbyid', err);
            res.status(200).json({ Success: false, Message: 'get Customer Information by id failed.', Data: null });
        }
    });

// get all customers info
router.route('/getallcustomersinfo')
    .get(function (req, res) {
        try {
            const CustomerInformationMst = datamodel.CustomerInformationMst();
            CustomerInformationMst.findAll()
                .then(function (result) {
                    if (result != null) {
                        return res.status(200).json({ Success: true, Data: result });
                    } else {
                        return res.status(200).json({ Success: false, Message: 'Failed to get all Customers Information' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('CustomerinfoService', 'getallcustomersinfo', err);
            res.status(200).json({ Success: false, Message: 'Get all Customers Information failed.', Data: null });
        }
    });

    // update customer info by params
router.route('/updatecustomerinfo/:CustomerID')
.put(function (req, res) {
    try {
        const CustomerInformationMst = datamodel.CustomerInformationMst();
        let values = ({
            EmailId: req.body.EmailId,
            Name: req.body.Name,
            Address: req.body.Address,
            Phone: req.body.Phone,
            GSTno: req.body.GSTno,
            FrequencyofAutomatedReminder: req.body.FrequencyofAutomatedReminder
        });
        let param = ({
           CustomerID: req.params.CustomerID
            
        });
        dataaccess.Update(CustomerInformationMst,values,param)
            .then(function (result) {
                if (result != null) {
                    return res.status(200).json({ Success: true, Message: 'Customer Information Updated Successfully.' });
                } else {
                    return res.status(200).json({ Success: false, Message: 'Failed to Update Customer Information' });
                }
            })
    }
    catch (err) {
        dataconn.ErrorLog('CustomerinfoService', 'addcustomerinfo', err);
        res.status(200).json({ Success: false, Message: 'Add Customer Information failed.', Data: null });
    }
});

    // delete customer info by params
    router.route('/deletecustomerinfo/:CustomerID')
    .delete(function (req, res) {
        try {
            const CustomerInformationMst = datamodel.CustomerInformationMst();
            let param = ({
               CustomerID: req.params.CustomerID                
            });
            dataaccess.Delete(CustomerInformationMst, param)
                .then(function (result) {
                    if (result == 1) {
                        return res.status(200).json({ Success: true, Message: 'Customer Information Deleted Successfully.'});
                    } else {
                        return res.status(200).json({ Success: false, Message: 'Failed to Delete Customer Information' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('CustomerinfoService', 'deletecustomerinfo', err);
            res.status(200).json({ Success: false, Message: 'Delete Customer Information failed.', Data: null });
        }
    });



    // get customer id for crm 
    router.route('/getcustomersid')
    .get(function (req, res) {
        try {
            const CustomerInformationMst = datamodel.CustomerInformationMst();
            CustomerInformationMst.findAll({
                attributes: ['CustomerID', 'Name','EmailId']
              })
                .then(function (result) {
                    if (result != null) {
                        return res.status(200).json({ Success: true, Data: result });
                    } else {
                        return res.status(200).json({ Success: false, Message: 'Failed to get all Customers Information' });
                    }
                })
        }
        catch (err) {
            dataconn.ErrorLog('CustomerinfoService', 'getallcustomersinfo', err);
            res.status(200).json({ Success: false, Message: 'Get all Customers Information failed.', Data: null });
        }
    });
module.exports = routes;