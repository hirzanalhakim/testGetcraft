const db = require('./db')
const mysql = require('mysql')


const powerService = {
    post: (req) => {
        return new Promise((resolve, reject) => {
            let powers = {
                powers: req.body.powers
            }
            const conn = mysql.createConnection(db);
            conn.beginTransaction(function (err) {
                if (err) {
                    reject(err)
                }
                conn.query("INSERT INTO powers(powers) VALUES(?)", [powers.powers], function (err, res) {
                    if (err) {
                        return conn.rollback(function () {
                            reject(err)
                        })
                    }
                    conn.commit(function (err) {
                        if (err) {
                            return conn.rollback(function () {
                                reject(err)
                            })
                        }
                        conn.destroy()
                        resolve("successfully insert")
                    })
                })
            })
        })
    },
    get: (req) => {
        return new Promise((resolve, reject) => {
            const conn = mysql.createConnection(db)
            conn.query('SELECT powers from powers ORDER BY powers.id', function (err, res){
                if(err){
                    return reject(err);
                }
                conn.destroy();
                resolve(res);
            }) 
        })
    },
    update: (req) => {
        return new Promise((resolve, reject) => {
            let power = {
                id : req.body.id,
                powers: req.body.powers
            }
            const conn = mysql.createConnection(db);
            conn.beginTransaction(function (err) {
                if (err) {
                    reject(err)
                }
                let payload = []
                let query = "UPDATE powers set powers = ? WHERE id = ?;"
                payload.push(power.powers)
                payload.push(power.id)
                
                
                conn.query(query, payload, function (err, res) {
                    if (err) {
                        return conn.rollback(function () {
                            reject(err)
                        })
                    }
                    conn.commit(function (err) {
                        if (err) {
                            return conn.rollback(function () {
                                reject(err)
                            })
                        }
                        conn.destroy()
                        const resp = {
                            "id" : power.id,
                            "msg" : (res.affectedRows === 1) ? "successfully updated" : "no row affected"
                        }
                        resolve(resp)
                    })
                })
            })
        })
    },
    delete: (req) => {
        return new Promise((resolve, reject) => {
            let power = {
                id : req.body.id,
            }
            const conn = mysql.createConnection(db);
            conn.beginTransaction(function (err) {
                if (err) {
                    reject(err)
                }
                let payload = []
                let query = "DELETE FROM powers WHERE id = ?;"
                payload.push(power.id)
                
                
                conn.query(query, payload, function (err, res) {
                    if (err) {
                        return conn.rollback(function () {
                            reject(err)
                        })
                    }
                    conn.commit(function (err) {
                        if (err) {
                            return conn.rollback(function () {
                                reject(err)
                            })
                        }
                        conn.destroy()
                        const resp = {
                            "id" : power.id,
                            "msg" : (res.affectedRows === 1) ? "successfully deleted" : "no row affected"
                        }
                        resolve(resp)
                    })
                })
            })
        })
    },
}

module.exports = powerService