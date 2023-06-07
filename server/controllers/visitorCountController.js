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
      const visitorCounts = await VisitorCount.findAll();

      if (visitorCounts.length === 0) {
        const errorResponse = httpErrors.notFound('No visitor counts found.');

        res.status(errorResponse.status).send({
          error: errorResponse.message,
        });
      } else {
        res.send(visitorCounts);
      }
    } catch (error) {
      const errorMessage = error.message || 'An error occurred';
      const errorResponse = httpErrors.internalServerError(errorMessage);

      res.status(errorResponse.status).send({
        error: errorResponse.message,
      });
    }
  },
};
