const { DataTypes } = require('sequelize');
const database = require('../dbInstance');

const Salesperson = database.define('Salesperson',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        phone: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        termination_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        manager: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        timestamps: false,
        modelName: 'Salesperson',
    }
);

module.exports = Salesperson; 