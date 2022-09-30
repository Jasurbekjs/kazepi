// Requires
const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

global.ROOT_DIR = __dirname;

// Database
const { Sequelize, sequelize, kazepiDB} = require('./db');

// Use
app.use(cors());
//Routes

require('./startup/routes')(app);


// Start server
// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync().then(()=>{
  kazepiDB.sync().then(()=>{
    http.listen(5000, () => {
      console.log('listening on *:5000');
    });
  }).catch(err=>console.log('kazepi', err));
}).catch(err=>console.log('gbh', err));