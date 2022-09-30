const { Sequelize, sequelize, oldDB} = require( ROOT_DIR + "/db");


const Transports = sequelize.define("transports", {
  transport_id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  tractor_18: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trailer_18: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country_18: {
    type: Sequelize.STRING,
    allowNull: true
  },
  tractor_21: {
    type: Sequelize.STRING,
    allowNull: true
  },
  trailer_21: {
    type: Sequelize.STRING,
    allowNull: true
  },
  country_21: {
    type: Sequelize.STRING,
    allowNull: true
  },
  type_transport: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: false,
  updatedAt: false
});

module.exports=Transports;