const { DataTypes } = require('sequelize');
const { ksuAUVDB } = require('../../dbInstance');

const servoData = ksuAUVDB.define('servoData',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        servoID: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        pwm: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
    },

    {
        timestamps: false,
        modelName: "servoData"
    }
);

module.exports = servoData;