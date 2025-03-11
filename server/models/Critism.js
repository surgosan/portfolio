const { DataTypes } = require('sequelize');
const { piDB } = require('../dbInstance');

const Critism = piDB.define('Critism',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },

    {
        timestamps: false,
        modelName: "Critism"
    }
);

module.exports = Critism;