const Categories = require(ROOT_DIR + '/models/categories/categories');

function create(item, params) {
	return Categories.create(item, params);
}
function update(item, params) {
	return Categories.update(item, params);
}
function remove(params) {
	return Categories.destroy(params);
}
function getPages(params, pagination, order) {
	return Categories.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Categories.findAll(params);
}
function get(params) {
	return Categories.findOne(params);
}

const CategoriesDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = CategoriesDAO;