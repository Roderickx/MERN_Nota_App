require('dotenv').config();

const app = require('./app');
require('./db');


 async function main() {

    await app.listen(app.get('PORT'));
    console.log('se inico el servidor en', app.get('PORT'));
}
 main();