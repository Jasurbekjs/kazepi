const { Sequelize, sequelize, oldDB} = require( ROOT_DIR + "/db");


const Clients = oldDB.define("clients", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  client_name: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: false,
  updatedAt: false
});

module.exports=Clients;
