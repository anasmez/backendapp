const {Model, DataTypes} = require('sequelize');
const sequelize=require('../db');

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            },
            len:{
                args: [1, 255],
                msg: "El nombre tiene que ser entre 1 y 255 caracteres"
            },
            notNull: {
                msg: "El nombre no puede ser nulo"
            }
        }
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            },
            len:{
                args: [1, 255],
                msg: "El nombre tiene que ser entre 1 y 255 caracteres"
            },
            notNull: {
                msg: "El apellido no puede ser nulo"
            }
        }
    },
    secondSurname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: ["^[A-z ']+$|^$|^-$", 'i'], 
                msg: "El nombre solo puede contener letras, estar vacío o guion"
            },
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:{
                args: true,
                msg: "El email tiene que ser válido"
            },
            notNull:{
                msg: "El email no puede ser nulo"
            }
        }
    }
}, {
    sequelize, modelName: "user"
});

module.exports=User;