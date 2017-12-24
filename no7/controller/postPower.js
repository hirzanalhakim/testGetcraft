const powerService = require('../service/power')

const postPower = (req, res) => {
                powerService.post(req)
                        .then(function (msg) {
                                res.send(msg)
                        })
                        .catch(function (err) {
                                res.status(500).send(err)
                        })
        }
module.exports = postPower