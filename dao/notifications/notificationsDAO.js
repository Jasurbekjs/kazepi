const Notifications = require(ROOT_DIR + '/models/notifications/notifications');

function create(item, params) {
	return Notifications.create(item, params);
}
function update(item, params) {
	return Notifications.update(item, params);
}
function remove(params) {
	return Notifications.destroy(params);
}
function getPages(params, pagination, order) {
	return Notifications.findAndCountAll({
		params,
		raw: true,
	  order:order,
	  limit: pagination.limit,
	  offset: pagination.offset
	});

}
function getAll(params) {
	return Notifications.findAll(params);
}
function get(params) {
	return Notifications.findOne(params);
}

const NotificationsDAO = {
	create, update, remove, getPages, getAll, get
}

module.exports = NotificationsDAO;