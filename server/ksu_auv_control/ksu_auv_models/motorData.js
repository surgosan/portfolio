const { DataTypes } = require('sequelize');
const database = require('../../dbInstance');

const motorData = database.define('motorData',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        motorID: {
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
        modelName: "motorData"
    }
);