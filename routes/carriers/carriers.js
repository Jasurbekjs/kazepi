const { kazepiDB, Sequelize} = require(ROOT_DIR + "/db.js");
const { express, jsonParser,  auth, router, pagExt,
		CarriersDAO
} = require( ROOT_DIR + "/startup/exporters"); 

router.get("/searchCarriers", [ jsonParser, auth ] , async (req, res) => {
	let searchCarrier = req.query.carrier;
	let searchPagination = {
		limit: req.query.limit || 10,
		offset: 0
	}

	return kazepiDB.transaction( async function (t){

		await CarriersDAO.getAll({where: 
			{
		      name: { [Sequelize.Op.like]: '%'+ searchCarrier +'%'} 
		    },
		    limit: searchPagination.limit,
	  		offset: 0, 
	  		transaction: t}).then(async carriers => {
			res.status(200).send({status: true, data: carriers});
		})
	}).catch(function (err) {
		console.log(err);
		res.send({'status': false, 'error': err});
	});
});

module.exports = router;