import {DataTypes, Model} from 'sequelize'
import sequelize from '../Database/sequelizeConnection'

class User extends Model {
    declare id: number;
    declare name: string;
    declare email: string;
    declare password: string;
}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
    },
    {
        sequelize, modelName:'Users', timestamps:true,
    }
       
)

export default User;