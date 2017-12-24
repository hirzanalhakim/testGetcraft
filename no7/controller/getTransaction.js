const userService = require('../service/transaction')


const getTransaction = (req, res) => {
        userService.get(req)
        .then(function (msg){
            res.send(msg)
        })
        .catch(function (err){
            res.status(500).send(err)
        })
    }

module.exports = getTransaction;