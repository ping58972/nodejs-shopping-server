const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');
const app= express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');



app.set('view engine', 'ejs');
// app.engine('handlebars', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout'}));
// app.set('view engine', 'handlebars');
// app.engine('handlebars', expressHbs());
// app.set('view engine', 'handlebars');
// app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', shopRoute);
app.use('/admin', adminRoute.router);

app.use('/', (req, res, next)=>{
    //res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.render('404', {docTitle: '404 Page', path: ''});
});

app.listen(4000);