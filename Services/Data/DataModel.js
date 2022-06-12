var connect = require('./Connect');

var sequelize = connect.sequelize;
var Sequelize = connect.Sequelize;
const Model = connect.Sequelize.Model;

//Model declaration starts

class UserMst extends Model { }
class CRM extends Model { }
class ErrorLog extends Model { }
class CustomerInformationMst extends Model { }

//Model declaration ends


//Model definition starts

module.exports.UserMst = function () {
    UserMst.init({
        UserId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        FullName: { type: Sequelize.STRING(200), allowNull: false },
        EmailId: { type: Sequelize.STRING(100), allowNull: false },
        Password: { type: Sequelize.STRING(100), allowNull: false },
        CreatedDate: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    },
    {
        sequelize,
        modelName: 'UserMst',
        tableName: 'UserMst'
    });

    return UserMst;
}

module.exports.CustomerInformationMst = function () {
    CustomerInformationMst.init({
        CustomerID: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        Name: { type: Sequelize.STRING(200), allowNull: false },
        EmailId: { type: Sequelize.STRING(100), allowNull: false },
        Phone: { type: Sequelize.STRING(20), allowNull: false },
        Address: { type: Sequelize.STRING(500), allowNull: false },
        GSTno: { type: Sequelize.STRING(15), allowNull: false },
        FrequencyofAutomatedReminder: { type: Sequelize.STRING(100), allowNull: false },
        CreatedDate: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    },
    {
        sequelize,
        modelName: 'CustomerInformationMst',
        tableName: 'CustomerInformationMst'
    });

    return CustomerInformationMst;
}

module.exports.CRM = function () {
    CRM.init({
        Id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        CustomerID: { type: Sequelize.INTEGER, allowNull: false},
        ConversationInfo: { type: Sequelize.STRING(200), allowNull: false },
        ContactDateTime: { type: Sequelize.DATE, allowNull: true},
    },
    {
        sequelize,
        modelName: 'CRM',
        tableName: 'CRM'
    });

    return CRM;
}


module.exports.ErrorLog = function () {
    ErrorLog.init({
        Id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
        ServiceName: { type: Sequelize.STRING(100), allowNull: true },
        FunctionName: { type: Sequelize.STRING(100), allowNull: true },
        ErrorObject: { type: Sequelize.TEXT, allowNull: true },
        CreatedDate: { type: Sequelize.DATE, allowNull: true, defaultValue: Sequelize.NOW },
    },
    {
        sequelize,
        modelName: 'ErrorLog',
        tableName: 'ErrorLog'
    });
    
    return ErrorLog;
}

//Model definition ends