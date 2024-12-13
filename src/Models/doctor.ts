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
        allowNull: false,
    },
    speciality: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    education: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING, 
        allowNull: false, 
    },
}, {
    timestamps: true, 
    tableName: 'Doctors', 
});

export default Doctor;
