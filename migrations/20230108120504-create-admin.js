'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {//this work when we do sequelize db:migrate
    await queryInterface.createTable('Admins', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(45)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {//this work when we do sequelize db:migrate:undo
    await queryInterface.dropTable('Admins'); //async await because queryInterface. whatEverFunction returns a promise
  }
};