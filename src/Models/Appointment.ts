import { DataTypes } from 'sequelize';
import sequelize from '../Database/sequelizeConnection';

const Doctor = sequelize.define('Doctor', {
    doctorDetails:{
       type: DataTypes.INTEGER,
       allowNull: false,
       references: {
        model: 'doctors',
        key: 'id',
       },
       onDelete: 'SET NULL',
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    time:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    createdBy:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
        onDelete: 'SET NULL',
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
},
{
  tableName: 'appointments',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
})