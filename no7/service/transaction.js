const db = require('./db')
const mysql = require('mysql')


const userService = {
    get: (req) => {
        return new Promise((resolve, reject) => {
            const conn = mysql.createConnection(db)
            conn.query('SELECT users.fullname, gender.description, powers.powers, address.description, location.city, location.country FROM transaction INNER JOIN users ON users.id = transaction.user_id INNER JOIN gender ON users.gender = gender.id INNER JOIN powers ON powers.id = transaction.powers_id INNER JOIN address ON address.id = transaction.address INNER JOIN location ON location.id = address.location ORDER BY transaction.id', function (err, res){
                if(err){
                    return reject(err);
                }
                conn.destroy();
                resolve(res);
            }) 
        })
    }
}

module.exports = userService