const { Sequelize, kazepiDB} = require( ROOT_DIR + "/db");

const Carriers = kazepiDB.define("carriers", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  region: {
    type: Sequelize.STRING,
    allowNull: true
  },
  category: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  street: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: true,
  updatedAt: true
});

module.exports=Carriers;