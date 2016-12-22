// var Account = require('../Models/Account').Account;
// var Transaction = require('../Models/Transaction').Transaction;

var models = require('../Models/index');

module.exports= {

    getAll(req, res) {
        console.log('Made it here');
        models.Account.findAll({
            //include: models.eTransactions
        })
        .then(function (accounts) {
            res.status(200).json(accounts);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
    },

    getByOwner(req, res) {
        var Owner = req.params.id;
        console.log('Get by owner: ', Owner);

        models.Account.findAll({
            where: {AccountOwnerID : Owner}
            //include: models.eTransactions
        })
        .then(function (accounts) {
            res.status(200).json(accounts);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });

    }
}