const Regions = require(ROOT_DIR + '/models/regions/regions');

function create(item, params) {
	return Regions.create(item, params);
}
function update(item, params) {
	return Regions.update(item, params);
}
function remove(params) {
	return Regions.destroy(params);
}
function getPages(params, pagination, order) {
	return Regions.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Regions.findAll(params);
}
function get(params) {
	return Regions.findOne(params);
}

const RegionsDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = RegionsDAO;