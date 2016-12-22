'use strict';
//var database = require('../db').database;

module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define('Account', {
        AccountId: {type: DataTypes.INTEGER, primaryKey: true},
        AccountOwnerID: DataTypes.CHAR,
        AccountName: DataTypes.STRING,
        Balance: DataTypes.FLOAT
    }, {
        tableName: 'eAccounts'
        // classMethods: {
        //     associate: function(models) {
        //         eAccounts.hasMany(models.eTransactions, {onDelete: 'cascade'});
        //     }
        // }
    });
    return Account;
}
