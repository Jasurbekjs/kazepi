const Sequelize = require("sequelize");
const Op = require("sequelize");

const sequelize = new Sequelize("hestiaJas_kazepi", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

const oldDB = new Sequelize("hestiaJas_gbh", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

const kazepiDB = new Sequelize("gbh_kazepi", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = {
  sequelize,
  oldDB,
  kazepiDB,

  Op,
  Sequelize,
};