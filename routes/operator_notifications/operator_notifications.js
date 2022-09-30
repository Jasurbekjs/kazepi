const { kazepiDB, Sequelize} = require(ROOT_DIR + "/db.js");
const { express, jsonParser,  auth, router, pagExt,
		NotificationsDAO,
		CountriesDAO, CurrenciesDAO, Transport_typesDAO
} = require( ROOT_DIR + "/startup/exporters"); 

router.get("/show", [ jsonParser, auth, pagExt ] , async (req, res) => {
	return kazepiDB.transaction( async function (t){
		await NotificationsDAO.getPages({where: req.body.params, transaction: t}, req.body.pagination, [['id', 'DESC']]).then(async notifications => {
			let pages = Math.ceil( notifications.count / req.body.pagination.limit);
			res.status(200).send({status: true, data: notifications.rows, total: pages});
		})
	}).catch(function (err) {
		console.log(err);
		res.send({'status': false, 'error': err});
	});
});
router.get("/base", [ jsonParser, auth ] , async (req, res) => {
	try {
		const countries = await CountriesDAO.getAll({ order:[['name', 'ASC']], raw: true});
		const currencies = await CurrenciesDAO.getAll({ order:[['three_digit', 'ASC']], raw: true });
		const transport_types = await Transport_typesDAO.getAll({ 
			where:{
					[Sequelize.Op.or]: [
		        { id: 3 },
		        { id: 4 },
		        { id: 5 }
		      ]
			},
			order:[['code', 'ASC']], raw: true });
		res.send({
			'status': true,
			countries, currencies, transport_types
		});
	} catch (err) {
		console.log(err);
		res.send({'status': false, err});
	}
});

router.post("/add", [ jsonParser, auth ] , async (req, res) => {
	let user = req.body.user;
	return kazepiDB.transaction( async function (t){
		let Notification = {
			status: 1, // 0 - cancelled, 1 - in progress, 2 - request info, 3 - registred
			date_reg: new Date(),
			creator_id: user.id,
			operator_id: user.id
		}
		await NotificationsDAO.create(Notification, {transaction: t}).then(async notification => {
			res.send({'status': true, 'notification': notification});
		})
	}).catch(function (err) {
		console.log(err);
		res.send({'status': false, 'error': err});
	});
});

router.post("/check", [ jsonParser, auth ] , async (req, res) => {
	let user = req.body.user;
	let id = req.body.id
	try{
		return kazepiDB.transaction( async function (t){
			await NotificationsDAO.get({where: {id: id, operator_id: user.id}}, {transaction: t}).then(async notification => {
				if(notification){
					res.send({'status': true, 'check': true, notification});
				} else { res.send({'status': false, 'check': false});}				
			})
		})
	}
	catch(err){ console.log(err); res.send({'status': false, 'error': err});}
});






module.exports = router;