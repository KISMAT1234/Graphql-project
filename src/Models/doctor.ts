import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../Database/sequelizeConnection';

// Define the attributes of the Doctor model
interface DoctorAttributes {
  doctorname: string;
  doctorEmail: string;
  doctorPassword: string;
  experience: number;
  fees: number;
  aboutme: string;
  speciality: string;
  education: string;
  address: string;
  image: string;
}

// Define the creation attributes (attributes that are optional during creation)
interface DoctorCreationAttributes extends Optional<DoctorAttributes, 'doctorname' | 'doctorEmail' | 'doctorPassword' | 'experience' | 'fees' | 'aboutme' | 'speciality' | 'education' | 'address'> {}

// Define the Doctor model class
class Doctor extends Model<DoctorAttributes, DoctorCreationAttributes> implements DoctorAttributes {
  doctorname!: string;
  doctorEmail!: string;
  doctorPassword!: string;
  experience!: number;
  fees!: number;
  aboutme!: string;
  speciality!: string;
  education!: string;
  address!: string;
  image!: string;

  static associate(models: any) {
    // define association here
  }
}

Doctor.init(
  {
    doctorname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctorEmail: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.STRING, // This can store the URL or file path of the image
      allowNull: true, // image can be optional
    },
  },
  {
    sequelize,
    modelName: 'Doctor',
    tableName: 'Doctors',
    timestamps: true, // If you want Sequelize to automatically add createdAt/updatedAt fields
  }
);

export default Doctor;
