const { kazepiDB, Op, Sequelize} = require(ROOT_DIR + "/db.js");
const { express, jsonParser,  auth, router, pagExt,
		CustomsDAO
} = require( ROOT_DIR + "/startup/exporters"); 
const Customs = require(ROOT_DIR + '/models/customs/customs');

router.get("/search", [ jsonParser, auth ] , async (req, res) => {
	let searchCustom = req.query.custom;
	let searchPagination = {
		limit: req.query.limit || 10,
		offset: 0
	}
	return kazepiDB.transaction( async function (t){

		await CustomsDAO.getAll({where: 
			{
		      [Sequelize.Op.or]: [
		        { code: { [Sequelize.Op.like]: searchCustom+'%'} },
		        { description: { [Sequelize.Op.like]: '%'+ searchCustom +'%'} }
		      ]
		    },
		    limit: searchPagination.limit,
	  		offset: 0, 
	  		transaction: t}).then(async customs => {
			res.status(200).send({status: true, data: customs});
		})
	}).catch(function (err) {
		console.log(err);
		res.send({'status': false, 'error': err});
	});
});

module.exports = router;