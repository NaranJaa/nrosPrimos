const express = require('express');
const app = express();
const config = require('./config');

//setting
app.set('port', config.api.port || 3000);

//routes
const controller = require('./server/nrosprimos');
app.use('/api', controller);


const server = app.listen( app.get('port'), () => {
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`);
});


module.exports = server;