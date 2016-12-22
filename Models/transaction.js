'use strict';

module.exports = function(DB, DataTypes) {
    var Transaction = DB.define('Transaction', {
        ID: {type: DataTypes.INTEGER, primaryKey: true},
        AccountID: DataTypes.INTEGER,
        TypeID: DataTypes.INTEGER,
        Description: DataTypes.STRING,
        Ammount: DataTypes.FLOAT,
        DateCreated: DataTypes.DATE,
        Date: DataTypes.DATE,
        Memo: DataTypes.STRING,
        CheckNumber: DataTypes.INTEGER,
        Category: DataTypes.INTEGER,
        Status: DataTypes.CHAR
    }, {
        tableName: 'eTransactions'
    });
    return Transaction;
};