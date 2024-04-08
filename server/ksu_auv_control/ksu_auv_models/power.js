const { DataTypes } = require('sequelize');
const { ksuAUVDB } = require('../../dbInstance');

const power = ksuAUVDB.define('power',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    },
    {
        timestamps: false,
        modelName: "power"
    }
);

module.exports = power;