const Transport_types = require(ROOT_DIR + '/models/transport_types/transport_types');

function create(item, params) {
	return Transport_types.create(item, params);
}
function update(item, params) {
	return Transport_types.update(item, params);
}
function remove(params) {
	return Transport_types.destroy(params);
}
function getPages(params, pagination, order) {
	return Transport_types.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Transport_types.findAll(params);
}
function get(params) {
	return Transport_types.findOne(params);
}

const Transport_typesDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = Transport_typesDAO;