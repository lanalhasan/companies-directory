'use strict';//related to typscript, the error 1(ike when we have an unused variable.. this type of errors how much we want the is to be strict abe)

const {Model} = require('sequelize');//different than model-folder but we've in It what would happen to a model..it is the abstract, altho each model inherit all its functions & methods
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model { ///Admin extends what ever is there in {Model} all the functions methods and properties.
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //this is a method
      // define association here where relations take place n:n ,n:m , m:m etc
    }
  }
  Admin.init({ //inherited function from {Model}
  //INTEGER & STRING are instances from DataTypes
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};