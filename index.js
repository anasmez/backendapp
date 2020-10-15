const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const sequelize = require('./database/db');
const User=require('./database/models/User');
require('./database/associations');


const app = express();

// Settings
app.set('appName', 'BackendApp with ExpressJs');
app.set('port', 3000);

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars');

// Middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


// Routes

app.use('/api/roles', require('./routes/roles'));
app.use('/api/users', require('./routes/users'));

app.all('/user', (req, res, next) => {
    console.log('Was here');
    next();
});

app.get('/', (req, res) => {
    res.render('home');
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(`${app.get('appName')} started at http://localhost:${app.get('port')}`)

    sequelize
    // force true: DROP TABLES
    .sync({force: false})
    .then(function (err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });

});