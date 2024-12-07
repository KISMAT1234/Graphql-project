'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface:any, Sequelize:any) {
    await queryInterface.createTable('Doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorname: {
        type: Sequelize.STRING
      },
      doctorEmail: {
        type: Sequelize.STRING
      },
      doctorPassword: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.INTEGER
      },
      fees: {
        type: Sequelize.DECIMAL
      },
      aboutme: {
        type: Sequelize.TEXT
      },
      speciality: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
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
  async down(queryInterface:any, Sequelize:any) {
    await queryInterface.dropTable('Doctors');
  }
};