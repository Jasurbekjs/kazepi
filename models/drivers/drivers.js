const { Sequelize, kazepiDB} = require( ROOT_DIR + "/db");

const Drivers = kazepiDB.define("drivers", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: false,
  updatedAt: false
});

module.exports=Drivers;