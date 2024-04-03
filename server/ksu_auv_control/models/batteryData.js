const { DataTypes } = require('sequelize');
const database = require('../../dbInstance');

const batteryData = database.define('batteryData',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        batteryID: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        voltage: {
            type: DataTypes.TINYINT,
            allowNull: false
        },

        amps: {
            type: DataTypes.TINYINT,
            allowNull: false
        }
    },

    {
        timestamps: false,
        modelName: "batteryData"
    }
);