const { Sequelize, kazepiDB} = require( ROOT_DIR + "/db");

const Transports = kazepiDB.define("transports", {
  transport_id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  tractor18: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trailer18: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country18: {
    type: Sequelize.STRING,
    allowNull: true
  },
  tractor21: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trailer21: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country21: {
    type: Sequelize.STRING,
    allowNull: true
  },
  type_transport: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: true,
  updatedAt: true
});

module.exports=Transports;