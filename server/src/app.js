const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./routes/route-karyawan');
app.use('/', appRoute);

app.listen(process.env.PORT || 8082, ()=>{
    console.log('Server Berjalan di Port : 8082');
});