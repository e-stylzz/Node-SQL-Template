//Transaction = require('../Models/Transaction');

var models = require('../Models/index');

module.exports= {
    getAll(req, res) {
        models.Transaction.findAll()
            .then(function (transactions) {
                res.status(200).json(transactions);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    getByAccount(req, res) {
        var Account = req.params.id;

        models.Transaction.findAll({
            where: {AccountID : Account}
        })
            .then(function (transactions) {
                res.status(200).json(transactions);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

}