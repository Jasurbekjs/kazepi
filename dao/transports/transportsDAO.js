const Transports = require(ROOT_DIR + '/models/transports/transports');

function create(item, params) {
	return Transports.create(item, params);
}
function update(item, params) {
	return Transports.update(item, params);
}
function remove(params) {
	return Transports.destroy(params);
}
function getPages(params, pagination, order) {
	return Transports.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Transports.findAll(params);
}
function get(params) {
	return Transports.findOne(params);
}

const TransportsDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = TransportsDAO;