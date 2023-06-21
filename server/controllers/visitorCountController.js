const { VisitorCount } = require('../models');
const httpErrors = require('./httpsErrors');

module.exports = {
  async newVisit(req, res) {
    try {
      const { lastVisit } = req.body;
      console.log(lastVisit);
      const visit = await VisitorCount.create({ lastVisit });

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
      res.send({ count: count.toString() });
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);
      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },
};
