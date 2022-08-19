'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    rank: DataTypes.STRING,
    reference: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    attachment: DataTypes.STRING,
    solde: DataTypes.INTEGER,
    cotisation: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
  });
  return User;
};