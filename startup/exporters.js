// Third party packages

const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const express = require("express");
const router = express.Router();
const jsonParser = require("body-parser").json();
const config = require("config");

//MIDDLEWARE

const auth = require(ROOT_DIR + "/middlewares/auth.js");
const pagExt = require(ROOT_DIR + "/middlewares/paginationExtractor.js");
const isAdmin = require(ROOT_DIR + "/middlewares/roleCheck/isAdmin.js");
const timeParser = require(ROOT_DIR + "/middlewares/timeParser.js");

//DAO
const NotificationsDAO = require(ROOT_DIR + "/dao/notifications/NotificationsDAO")
const CategoriesDAO = require(ROOT_DIR + "/dao/categories/CategoriesDAO")
const CountriesDAO = require(ROOT_DIR + "/dao/countries/CountriesDAO")
const CurrenciesDAO = require(ROOT_DIR + "/dao/currencies/CurrenciesDAO")
const PackagesDAO = require(ROOT_DIR + "/dao/packages/PackagesDAO")
const RegionsDAO = require(ROOT_DIR + "/dao/regions/regionsDAO")
const Transport_typesDAO = require(ROOT_DIR + "/dao/transport_types/transport_typesDAO")
const CustomsDAO = require(ROOT_DIR + "/dao/customs/customsDAO")
const TransportsDAO = require(ROOT_DIR + "/dao/transports/TransportsDAO")
const CarriersDAO = require(ROOT_DIR + "/dao/carriers/carriersDAO")
const DriversDAO = require(ROOT_DIR + "/dao/drivers/driversDAO")

module.exports = {
	Sequelize, bcrypt, jwt, _, jsonParser, config, express, router,
	auth, pagExt, isAdmin, timeParser,
	NotificationsDAO, 
	CategoriesDAO, CountriesDAO, CurrenciesDAO, PackagesDAO, RegionsDAO, Transport_typesDAO, CustomsDAO, TransportsDAO, CarriersDAO, DriversDAO
}