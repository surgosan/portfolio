const {VisitorCount} = require('../models');
const httpErrors = require('./httpsErrors');

module.exports = {
	async newVisit(req, res) {
		try {
			const {lastVisit} = req.body;
			console.log(lastVisit);
			const visit = await VisitorCount.create({lastVisit});

			res.send('New visitor on ' + lastVisit);
		} catch (error) {
			const errorMessage = error.message || 'An error occurred';
			const errorResponse = httpErrors.internalServerError(errorMessage);

			res.status(errorResponse.status).send({
				error: errorResponse.message,
			});
		}
	},

	async getAllVisits(req, res) {
		try {
			const count = await VisitorCount.count();
			res.send({count: count.toString()});
		} catch (error) {
			const errorMessage = error.message || 'An error occurred';
			const errorResponse = httpErrors.internalServerError(errorMessage);
			res.status(errorResponse.status).send({
				error: errorResponse.message,
			});
		}
	},

	async getRecentVisits(req, res) {
		try {
			const recentVisits = await VisitorCount.findAll({
				order: [['lastVisit', 'DESC']],
				limit: 10,
			});

			res.send(recentVisits);
		} catch (error) {
			const errorMessage = error.message || 'An error occurred';
			const errorResponse = httpErrors.internalServerError(errorMessage);

			res.status(errorResponse.status).send({
				error: errorResponse.message,
			});
		}
	},

  async deleteMostRecentVisit(req, res) {
    try {
      const mostRecentVisit = await VisitorCount.findOne({
        order: [['lastVisit', 'DESC']],
        raw: true,
      });

      if (!mostRecentVisit) {
        return res.send('No visits found');
      }

      await VisitorCount.destroy({ where: { id: mostRecentVisit.id } });

      res.send('Most recent visit deleted');
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);

      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  }
};
