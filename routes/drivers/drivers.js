const { kazepiDB, Sequelize} = require(ROOT_DIR + "/db.js");
const { express, jsonParser,  auth, router, pagExt,
		DriversDAO
} = require( ROOT_DIR + "/startup/exporters"); 

router.get("/searchDrivers", [ jsonParser, auth ] , async (req, res) => {
	let searchDriver = req.query.driver;
	let searchPagination = {
		limit: req.query.limit || 10,
		offset: 0
	}

	return kazepiDB.transaction( async function (t){

		await DriversDAO.getAll({where: 
			{
		      name: { [Sequelize.Op.like]: '%'+ searchDriver +'%'} 
		    },
		    limit: searchPagination.limit,
	  		offset: 0, 
	  		transaction: t}).then(async drivers => {
			res.status(200).send({status: true, data: drivers});
		})
	}).catch(function (err) {
		console.log(err);
		res.send({'status': false, 'error': err});
	});
});

module.exports = router;