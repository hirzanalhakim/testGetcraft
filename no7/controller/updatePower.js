const powerService = require('../service/power')

const updatePower = (req, res) => {
                powerService.update(req)
                        .then(function (msg) {
                                res.send(msg)
                        })
                        .catch(function (err) {
                                res.status(500).send(err)
                        })
        }
module.exports = updatePower