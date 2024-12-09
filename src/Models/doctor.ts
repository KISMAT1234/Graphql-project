import { DataTypes } from 'sequelize';
import sequelize from '../Database/sequelizeConnection';

const Doctor = sequelize.define('Doctor', {
    doctorname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    doctorEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure unique email
    },
    doctorPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fees: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    aboutme: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    speciality: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    education: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING, // Store URL or file path of the image
        allowNull: true, // Optional field
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: 'Doctors', // Explicitly define the table name
});

export default Doctor;
