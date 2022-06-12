const environmentConfig = {
    local:{
        service_port: 1339,
        ui_url: 'http://localhost:4200/crm/',
        dbConn: {
            dbServer: 'localhost',
            dbName: 'CRM',
            dbUser: 'postgres',
            dbPassword: '',            
        }
    }
}

const email_smtp_config = {
    host: "127.0.0.1",   //SMTP Host Address
    port: "1025",                 //SMTP PORT
    auth: {
        user: "",   //Username
        pass: ""    //Password
    }
}

const environment = 'local'; 

const finalConfig = environmentConfig[environment];

module.exports.service_port = finalConfig.service_port;
module.exports.ui_url = finalConfig.ui_url;
module.exports.dbConn = finalConfig.dbConn;
module.exports.email_smtp_config = email_smtp_config;


