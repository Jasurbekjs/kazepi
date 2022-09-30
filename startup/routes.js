const statisticsRoute = require(ROOT_DIR + '/routes/odd/statistics');
const odd_notificationsRoute = require(ROOT_DIR + '/routes/odd/notifications');

const operator_notificationsRoute = require(ROOT_DIR + '/routes/operator_notifications/operator_notifications');
const customsRoute = require(ROOT_DIR + '/routes/customs/customs');
const TransportsRoute = require(ROOT_DIR + '/routes/transports/transports');
const CarriersRoute = require(ROOT_DIR + '/routes/carriers/carriers');
const DriversRoute = require(ROOT_DIR + '/routes/drivers/drivers');

module.exports = function(app){
	app.use('/api/statistics', statisticsRoute);
	app.use('/api/odd', odd_notificationsRoute);
	app.use('/api/operator_notifications', operator_notificationsRoute);
	app.use('/api/customs', customsRoute);
	app.use('/api/transports', TransportsRoute);
	app.use('/api/carriers', CarriersRoute);
	app.use('/api/drivers', DriversRoute);
}