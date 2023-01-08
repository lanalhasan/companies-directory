'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      provinceId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      cityId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      banner: {
        type: Sequelize.STRING
      },
      views: {
        defaultValue:0,
        type: DataTypes.INTEGER.UNSIGNED
      },
      latitude: {
        type: Sequelize.DECIMAL(10,8)
      },
      longitude: {
        type: Sequelize.DECIMAL(11,8)
      },
      description: {
        type: Sequelize.TEXT
      },
      establishmentDate: {
        type: Sequelize.DATE
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};