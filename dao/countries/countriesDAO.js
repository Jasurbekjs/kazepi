const Countries = require(ROOT_DIR + '/models/countries/countries');

function create(item, params) {
	return Countries.create(item, params);
}
function update(item, params) {
	return Countries.update(item, params);
}
function remove(params) {
	return Countries.destroy(params);
}
function getPages(params, pagination, order) {
	return Countries.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Countries.findAll(params);
}
function get(params) {
	return Countries.findOne(params);
}

const CountriesDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = CountriesDAO;