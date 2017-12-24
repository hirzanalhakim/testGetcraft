const getTransaction = require('./controller/getTransaction')
const getPower = require('./controller/getPower')
const deletePower = require('./controller/deletePower')
const updatePower = require('./controller/updatePower')
const postPower = require('./controller/postPower')
var express = require ('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.send('Express Works');
});

app.get('/zan', function(req, res){
    res.send('Hirzan Belajar Express');
})

//getCraft
app.get('/transaction', getTransaction)
app.get('/power', getPower)
app.patch('/power/update', updatePower)
app.delete('/power/delete', deletePower)
app.post('/power/post', postPower)




app.listen(app.get('port'), function(){
    console.log('express Started!');
})