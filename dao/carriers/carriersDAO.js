const Carriers = require(ROOT_DIR + '/models/carriers/carriers');

function create(item, params) {
	return Carriers.create(item, params);
}
function update(item, params) {
	return Carriers.update(item, params);
}
function remove(params) {
	return Carriers.destroy(params);
}
function getPages(params, pagination, order) {
	return Carriers.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Carriers.findAll(params);
}
function get(params) {
	return Carriers.findOne(params);
}

const CarriersDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = CarriersDAO;