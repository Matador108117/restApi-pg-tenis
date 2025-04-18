'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sneaker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sneaker.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    brand: DataTypes.STRING,
    size: DataTypes.FLOAT,
    image: DataTypes.STRING,
    color: DataTypes.STRING,
    sex: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Sneaker',
  });
  return Sneaker;
};