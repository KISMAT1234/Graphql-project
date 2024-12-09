'use strict';

import { QueryInterface, DataTypes } from 'sequelize';
import { Migration } from 'sequelize-cli';

const migration: Migration = {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.addColumn('Doctors', 'image', {
      type: Sequelize.STRING, // Column type for the image URL or file path
      allowNull: true,         // Allow null if the image is not provided
    });
  },

  async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.removeColumn('Doctors', 'image');  // Remove the image column if we rollback
  }
};

export default migration;
