const Sequelize = require('sequelize');

const batteryData = require('./batteryData');
const motorData = require('./motorData');
const servoData = require('./servoData');
const log = require('./log');

const auv_models = {
    batteryData,
    motorData,
    servoData,
    log
};

auv_models.sequelize = Sequelize;

module.exports = auv_models;