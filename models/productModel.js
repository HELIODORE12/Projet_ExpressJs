const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "Le nom ne peut pas être vide"
            }
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: {
                msg: "La quantité doit être un nombre entier"
            },
            min: {
                args: [0],
                msg: "La quantité doit être un nombre positif"
            }
        }
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: {
                msg: "Le prix doit être un nombre valide"
            },
            min: {
                args: [0],
                msg: "Le prix doit être un nombre positif"
            }
        }
    }
}, {
    timestamps: true
});
module.exports = Product;