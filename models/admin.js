'use strict'; //related to typscript, 
const { Model } = require('sequelize'); //model is a class in sequelize 
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //this is a method
      // define association here
    }
  }
  Admin.init({ //inhereted function from Model
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize, //instance from sequelize
    modelName: 'Admin',
  });
  return Admin;
};