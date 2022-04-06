const express = require('express');
const cors = require('cors');
const app = express();


//configuracion
app.set('PORT', process.env.PORT || 4000);

//midlewares

app.use(cors());
app.use(express.json());
//routes

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;