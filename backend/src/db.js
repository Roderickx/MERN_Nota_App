const mongoose = require('mongoose');

console.log(process.env.DB_URI);

const URI = process.env.DB_URI;
/*
    ? process.env.DB_URI 
    :'mongodb://localhost/mernstack';*/

mongoose.connect(URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('db conectada');
});