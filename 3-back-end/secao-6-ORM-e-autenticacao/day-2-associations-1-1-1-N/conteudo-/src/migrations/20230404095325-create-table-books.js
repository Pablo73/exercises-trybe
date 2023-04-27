'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('books', {
     id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
     },
     title: {
      type: Sequelize.STRING,
      allowNull: false
     },
     author: {
      type: Sequelize.STRING,
      allowNull: false
     },
     pageQuantity: {
      type: Sequelize.INTEGER,
      allowNull: false
     },
     createdAt: {
      type: Sequelize.DATE,
      allowNull: false
     },
     updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
     }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};
