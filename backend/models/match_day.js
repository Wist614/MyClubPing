'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match_Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Match_Day.belongsTo(models.Season, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  }
  Match_Day.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Match_Day',
    underscored: true,
  });
  return Match_Day;
};