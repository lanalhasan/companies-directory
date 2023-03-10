'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    provinceId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    logo: DataTypes.STRING,
    banner: DataTypes.STRING,
    views: DataTypes.INTEGER,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    establishmentDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};