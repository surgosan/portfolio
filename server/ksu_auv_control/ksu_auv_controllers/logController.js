const {log} = require('../ksu_auv_models');
const httpErrors = require('../../controllers/httpsErrors');
const {Op} = require("sequelize");

module.exports = {
    async inputBulk (req, res) {
        try {
            const inputData = req.body
            const createdData = await log.bulkCreate(inputData, { ignoreDuplicates: true });
            res.send(`${createdData.length} logs submitted. ${inputData.length - createdData.length} duplicates avoided.`);
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
            const createdData = await log.create(req.body);
            res.send(`Successfully input log with ID: ${createdData.id}`);
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    },

    async getSessionMarkers(req, res) {
        try {
            const { day } = req.body;
            const startDate = new Date(day);
            const endDate = new Date(day);
            endDate.setDate(startDate.getDate() + 1);

            const sessionMarkers = await log.findAll({
                where: {
                    sessionMarker: true,
                    date: {
                        [Op.between]: [startDate, endDate]
                    }
                }
            });

            res.send(sessionMarkers);
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

            const dataPoints = await log.findAll({
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
    },

    async checkActiveSession(req, res) {
        try {
            const activeSession = await log.findOne({
                where: {
                    sessionMarker: true
                },
                order: [['id', 'DESC']]
            });

            if(activeSession && activeSession.sessionStart === true) {
                res.send(activeSession);
            } else {
                res.send(false);
            }
        } catch (error) {
            const errorMessage = error.message || 'An error occurred';
            const errorResponse = httpErrors.internalServerError(errorMessage);

            res.status(errorResponse.status).send({
                error: errorResponse.message,
            });
        }
    }
}