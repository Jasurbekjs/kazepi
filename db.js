const Sequelize = require("sequelize");

const sequelize = new Sequelize("hestiaJas_kazepi", "hestiaJas_gbh", "hestiaJas_gbh13", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

const mainDB = new Sequelize("hestiaJas_epi", "hestiaJas_gbh", "hestiaJas_gbh13", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

const oldDB = new Sequelize("hestiaJas_gbh", "hestiaJas_gbh", "hestiaJas_gbh13", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = {
  mainDB,
  oldDB,
  sequelize,
  Sequelize,
};