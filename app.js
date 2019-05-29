const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app= express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', shopRoute);
app.use('/admin', adminRoute.router);
app.use('/', (req, res, next)=>{
    res.render('404', {docTitle: '404 Page', path: ''});
});

app.listen(4000);