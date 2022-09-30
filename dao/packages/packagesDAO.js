const Packages = require(ROOT_DIR + '/models/packages/packages');

function create(item, params) {
	return Packages.create(item, params);
}
function update(item, params) {
	return Packages.update(item, params);
}
function remove(params) {
	return Packages.destroy(params);
}
function getPages(params, pagination, order) {
	return Packages.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Packages.findAll(params);
}
function get(params) {
	return Packages.findOne(params);
}

const PackagesDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = PackagesDAO;