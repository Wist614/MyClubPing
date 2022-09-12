const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            set(value) {
                const salt = bcrypt.genSaltSync(12);
                const hash = bcrypt.hashSync(value, salt);
                this.setDataValue('password', hash);
            },
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rank: {
            type: DataTypes.STRING,
        },
        num_ref: {
            type: DataTypes.INTEGER,
        },
        phone: {
            type: DataTypes.STRING,
        },
        solde: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            defaultValue: 0.00
        },
        cotisation: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        aboutUser: {
            type: DataTypes.VIRTUAL,
            get() {
                return `${this.first_name} ${this.last_name} ${this.rank}`
            }
        }
    })

    return User
}