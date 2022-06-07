// Requires
const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

// Database
const { Sequelize, sequelize} = require('./db');

// Use
app.use(cors());
//Routes
require('./startup/routes')(app);


// Start server
// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync().then(()=>{
  http.listen(5000, () => {
    console.log('listening on *:5000');
  });
}).catch(err=>console.log(err));