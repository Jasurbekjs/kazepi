const { Sequelize, kazepiDB} = require( ROOT_DIR + "/db");


const Notifications = kazepiDB.define("notifications", {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER(1),
    allowNull: true
  },
  code_astana: {
    type: Sequelize.STRING,
    allowNull: true
  },
  client_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  date_reg: {
    type: Sequelize.DATE,
    allowNull: true
  },
  date_xmll: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  party: {
    type: Sequelize.STRING,
    allowNull: true
  },
  departure_country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  destination_country: {
    type: Sequelize.STRING,
    allowNull: true
  },
  type_transportation: {
    type: Sequelize.STRING,
    allowNull: true
  },
  key_asycuda: {
    type: Sequelize.STRING,
    allowNull: true
  },
  customs_departure: {
    type: Sequelize.STRING,
    allowNull: true
  },
  customs_destination: {
    type: Sequelize.STRING,
    allowNull: true
  },
  transport_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  carrier_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  driver_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  creator_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  operator_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  corrections: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true
  },
  required_info: {
    type: Sequelize.STRING,
    allowNull: true
  },
  otgr_spec: {
    type: Sequelize.STRING,
    allowNull: true
  },
  code_guarantee: {
    type: Sequelize.STRING,
    allowNull: true
  },
  guarantee_id: {
    type: Sequelize.INTEGER(11),
    allowNull: true
  },
  general_sum: {
    type: Sequelize.STRING,
    allowNull: true
  },
  general_currency: {
    type: Sequelize.STRING,
    allowNull: true
  },
  general_brutto: {
    type: Sequelize.STRING,
    allowNull: true
  },
},{
  createdAt: true,
  updatedAt: true
});

module.exports=Notifications;