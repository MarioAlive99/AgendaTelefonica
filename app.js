const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/agenda')
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err));

const indexRoutes = require('./routes/index');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/',indexRoutes);

app.listen(app.get('port'),()=>{
    console.log('Conectado en el puerto');
    console.log(app.get('port'));
});