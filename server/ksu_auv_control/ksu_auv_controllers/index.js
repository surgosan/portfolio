const batteryController = require('./batteryController');
const motorController = require('./motorController');
const servoController = require('./servoController');
const logController = require('./logController');
const powerController = require('./powerController');

// Access controllers from auv controllers index
module.exports = {
    batteryController,
    motorController,
    servoController,
    logController,
    powerController
}