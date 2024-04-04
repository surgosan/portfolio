const { DataTypes } = require('sequelize');
const { portfolioDB } = require('../dbInstance');

const Suggestion = portfolioDB.define('Suggestion',
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

        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
        fulfilled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },

    {
        timestamps: false,
        modelName: "Suggestion"
    }
);

module.exports = Suggestion;