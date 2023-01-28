const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let userSampleCredentials = require('./userValidata');
const app = express();
app.set('view engine', 'ejs');
app.listen(5000);
app.get('/', (req, res) => {
    res.render('form');
});

fs.readFile('user.txt', 'utf8', (err, data) => {
    if (err) throw err

    fs.writeFile('userValidata.js', data, (err) => {
        if (err)
            throw err;
    })
})

app.post('/profile', urlencodedParser, (req, res) => {
    var userCredentials = req.body;

    if (userCredentials.email == userSampleCredentials.email && userCredentials.password == userSampleCredentials.password) {
        res.render('formResponse');
    } else {
        res.render('formInvalid');
    }
})

app.get('/', (req, res) => {
    res.render('form');
})