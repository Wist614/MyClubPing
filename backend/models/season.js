'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Season.hasMany(models.Match_days);
    }
  }
  Season.init({
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Season',
    underscored: true,
  });
  return Season;
};