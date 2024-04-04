const {servoData} = require('../ksu_auv_models');
const httpErrors = require('../../controllers/httpsErrors');
const {Op} = require("sequelize");

module.exports = {
    async inputBulk (req, res) {
        try {
            const inputData = req.body
            const createdData = await servoData.bulkCreate(inputData, { ignoreDuplicates: true });
            res.send(`${createdData.length} servo data points submitted. ${inputData.length - createdData.length} duplicates avoided.`);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    },

    async inputData(req, res) {
        try {
            const createdData = await servoData.create(req.body);
            res.send(`Successfully input servo with ID: ${createdData.id}`);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    },

    async getAllBetween(req, res) {
        try {
            const { markers } = req.body;
            const startDate = new Date(markers[0]);
            const endDate = new Date(markers[1]);

            const dataPoints = await servoData.findAll({
                where: {
                    date: {
                        [Op.between]: [startDate, endDate]
                    }
                }
            });

            res.send(dataPoints);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    }
}