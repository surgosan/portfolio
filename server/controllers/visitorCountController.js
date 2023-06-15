const { VisitorCount } = require('../models');
const httpErrors = require('./httpsErrors');

module.exports = {
  async newVisit(req, res) {
    try {
      const { visits, lastVisit } = req.body;
      const newVisitorCount = await VisitorCount.create({ visits, lastVisit });

      res.send('Welcome.');
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
      res.send({ count });
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);
      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },
};
