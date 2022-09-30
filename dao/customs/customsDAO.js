const Customs = require(ROOT_DIR + '/models/customs/customs');

function create(item, params) {
	return Customs.create(item, params);
}
function update(item, params) {
	return Customs.update(item, params);
}
function remove(params) {
	return Customs.destroy(params);
}
function getPages(params, pagination, order) {
	return Customs.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params, limit, offset) {
	if(limit && offset){
		return Customs.findAll(params, limit, offset);
	} 
	return Customs.findAll(params);
}
function get(params) {
	return Customs.findOne(params);
}

const CustomsDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = CustomsDAO;