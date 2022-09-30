const Drivers = require(ROOT_DIR + '/models/drivers/drivers');

function create(item, params) {
	return Drivers.create(item, params);
}
function update(item, params) {
	return Drivers.update(item, params);
}
function remove(params) {
	return Drivers.destroy(params);
}
function getPages(params, pagination, order) {
	return Drivers.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params, limit, offset) {
	if(limit && offset){
		return Drivers.findAll(params, limit, offset);
	} 
	return Drivers.findAll(params);
}
function get(params) {
	return Drivers.findOne(params);
}

const DriversDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = DriversDAO;