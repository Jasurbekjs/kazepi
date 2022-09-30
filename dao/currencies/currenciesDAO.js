const Currencies = require(ROOT_DIR + '/models/currencies/currencies');

function create(item, params) {
	return Currencies.create(item, params);
}
function update(item, params) {
	return Currencies.update(item, params);
}
function remove(params) {
	return Currencies.destroy(params);
}
function getPages(params, pagination, order) {
	return Currencies.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Currencies.findAll(params);
}
function get(params) {
	return Currencies.findOne(params);
}

const CurrenciesDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = CurrenciesDAO;