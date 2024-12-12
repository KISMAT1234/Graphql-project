module.exports = {
  up: async (queryInterface:any, Sequelize:any) => {
    await queryInterface.createTable('Doctors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      doctorname: {
        type: Sequelize.STRING,
        allowNull: false, // Makes this field required
      },
      doctorEmail: {
        type: Sequelize.STRING,
        allowNull: false, // Makes this field required
        unique: true,
      },
      doctorPassword: {
        type: Sequelize.STRING,
        allowNull: false, // Makes this field required
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: false, // Makes this field required
      },
      fees: {
        type: Sequelize.DECIMAL,
        allowNull: false, // Makes this field required
      },
      aboutme: {
        type: Sequelize.TEXT,
        allowNull: false, // Optional field
      },
      speciality: {
        type: Sequelize.STRING,
        allowNull: false, // Optional field
      },
      education: {
        type: Sequelize.STRING,
        allowNull: false, // Optional field
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false, // Optional field
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false, // Optional field
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface:any, Sequelize:any) => {
    await queryInterface.dropTable('Doctors');
  },
};
