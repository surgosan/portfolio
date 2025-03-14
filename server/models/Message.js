const { DataTypes } = require('sequelize');
const { piDB } = require('../dbInstance');

const Message = piDB.define('Message',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

        first_name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },

    {
        timestamps: false,
        modelName: "Message"
    }
);

module.exports = Message;