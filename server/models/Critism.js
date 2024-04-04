const { DataTypes } = require('sequelize');
const { portfolioDB } = require('../dbInstance');

const Critism = portfolioDB.define('Critism',
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