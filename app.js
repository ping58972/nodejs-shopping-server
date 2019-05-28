const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

const app= express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', shopRoute);
app.use('/admin', adminRoute);

app.use('/', (req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(4000);