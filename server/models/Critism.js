const { DataTypes } = require('sequelize');
const database = require('../dbInstance');

const Critism = database.define('Critism',
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