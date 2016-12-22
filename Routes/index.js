
var express = require('express');
var router = express.Router();
var accounts = require('../Controllers/accounts');
var transactions = require('../Controllers/transactions');


// accounts routes
router.get('/accounts', accounts.getAll);
router.get('/accounts/:id', accounts.getByOwner);

// transaction routes
router.get('/transactions', transactions.getAll);
router.get('/transactions/:id', transactions.getByAccount);

module.exports = router;