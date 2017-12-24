const powerService = require('../service/power')

const getPower = (req, res) => {
                powerService.get(req)
                        .then(function (msg) {
                                res.send(msg)
                        })
                        .catch(function (err) {
                                res.status(500).send(err)
                        })
        }

module.exports = getPower