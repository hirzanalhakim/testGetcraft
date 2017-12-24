const powerService = require('../service/power')

const deletePower = (req, res) => {
                powerService.delete(req)
                        .then(function (msg) {
                                res.send(msg)
                        })
                        .catch(function (err) {
                                res.status(500).send(err)
                        })
        }

module.exports = deletePower