const statisticsRoute = require('../routes/statistics');

module.exports = function(app){
	app.use('/api/statistics', statisticsRoute);
}