
//index.js role is to add the models that have defined in sequelize & executes its association
'use strict';

const fs = require('fs');//needed for example when we want to delete a file , create a folder or see what a folder has ..we use fs
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
 const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {//giving the direction of info from where we can connect to the db
  sequelize = new Sequelize(process.env[config.use_env_variable], config);//making connection in db
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)//it will give an array for the files that models contain//directory name (in our case the models folder)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })//this will return an array of files that ends with .js only
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);//importing the exported function in each model and is excuting it
    db[model.name] = model;//[model.name] is for example our  modelName: 'Admin'
  });

Object.keys(db).forEach(modelName => { //Object.keys(db) will give us an array of all the models we have
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
