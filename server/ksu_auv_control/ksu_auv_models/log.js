const { DataTypes } = require('sequelize');
const { ksuAUVDB } = require('../../dbInstance');

const log = ksuAUVDB.define('Log',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        sessionMarker: { //Used to select sessions to load
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    },

    {
        timestamps: false,
        modelName: "Log"
    }
);

module.exports = log;