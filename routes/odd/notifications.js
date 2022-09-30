const Notifications = require(ROOT_DIR + '/models/odd/notifications');
const Transports = require(ROOT_DIR + '/models/odd/transports');
const Goods = require(ROOT_DIR + '/models/odd/goods');
const Users = require(ROOT_DIR + '/models/odd/users');

const { Op } = require("sequelize");
const {sequelize} = require(ROOT_DIR +'/db');

const { express, jsonParser,  auth, router } = require( ROOT_DIR + "/startup/exporters"); 

const getToday = () => {
	let now = new Date(),
	 	year = now.getFullYear(),
	 	month = ('0' + (now.getMonth() + 1)).slice(-2),
	 	day = ('0' + now.getDate()).slice(-2);
	let result = `${year}-${month}-${day}`
	return result;
}
const getSearchObject = (obj) => {
	if(!obj) return;

	let result = {};
	for (const [key, value] of Object.entries(obj)) {
	 	if(value !== '' && value !== null){
	 		result[key] = value
	 	}
	}
	return result
}

router.post("/notifications", [ jsonParser/*, auth*/, ] , async (req, res) => {
	const search = req.body.search;
	const today = getToday();
	if(search.date_begin){
		if(search.date_begin.length === 0){delete search.date_begin}
	}
	delete search.operator
	const getSearch = getSearchObject(search)

	let limit = req.body.per_page ? req.body.per_page : 20,
		  offset = req.body.page * limit - limit;

	if(Object.keys(getSearch).length !== 0){ // w/o search
		if(getSearch.date_begin){
			if(getSearch.date_begin.length == 2){
				getSearch.date_begin = {[Op.between]: [getSearch.date_begin[0], getSearch.date_begin[1]]}
			} 
			else if(getSearch.date_begin.length == 1){ getSearch.date_begin = getSearch.date_begin[0];}
		}
		
		if(getSearch.transport){
			getSearch.transport = getSearch.transport.trim();
			let transport_id = await Transports.findOne({attributes: ['transport_id'], where:{tractor_18: getSearch.transport }, raw: true })
			delete getSearch.transport;
			transport_id ? getSearch.transport_id = transport_id.transport_id : '';
		}
	}
	limit = Object.keys(getSearch).length > 0 ? 1000 : limit;
	let notifications = await Notifications.findAndCountAll({
		where: Object.keys(getSearch).length !== 0 ? getSearch : {},
		raw:true,
		order:[['date_begin', 'DESC'],[ sequelize.cast(sequelize.col('party'), 'INT') , 'DESC' ], ['id', 'DESC']],
		limit,
		offset,
	})
	console.log(getSearch)
	for(let item of notifications.rows){
		let transport = await Transports.findOne({where:{transport_id: item.transport_id}})
		item.transport = transport ? transport.tractor_18 : "";

		let goods = await Goods.count({where: {notification_id: item.id}})
		item.total_goods = goods;
	}
	let response = {
		reports: notifications.rows,
		total: parseInt((notifications.count-1)/limit)+ 1,
		page: req.body.page
	}
	res.status(200).send(response);
	
});

module.exports = router;