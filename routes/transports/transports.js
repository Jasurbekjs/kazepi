const { kazepiDB, Op, Sequelize} = require(ROOT_DIR + "/db.js");
const { express, jsonParser,  auth, router, pagExt,
		TransportsDAO
} = require( ROOT_DIR + "/startup/exporters"); 

router.get("/searchTractors", [ jsonParser, auth ] , async (req, res) => {
	let searchTractor = req.query.tractor;
	let searchPagination = {
		limit: req.query.limit || 10,
		offset: 0
	}
	return kazepiDB.transaction( async function (t){

		await TransportsDAO.getAll({where: 
			{
		      [Sequelize.Op.or]: [
		        { tractor18: { [Sequelize.Op.like]: searchTractor+'%'} }
		      ]
		    },
		    limit: searchPagination.limit,
	  		offset: 0, 
	  		transaction: t}).then(async tractors => {
			res.status(200).send({status: true, data: tractors});
		})
	}).catch(function (err) {
		console.log(err);
		res.send({'status': false, 'error': err});
	});
});

module.exports = router;