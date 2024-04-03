const { DataTypes } = require('sequelize');
const database = require('../../dbInstance');

const log = database.define('Log',
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
        }
    },

    {
        timestamps: false,
        modelName: "Log"
    }
);