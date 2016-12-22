var Sequelize = require('sequelize');
var config = require('./config');

var sequelize = new Sequelize(config.db, config.username, config.password, {
    dialect: config.dialect,
    host: config.host,
    port: config.port,
    dialectOptions: {
        encrypt: true
    },
    define: {
        timestamps: false
    }
});

module.exports = sequelize;


