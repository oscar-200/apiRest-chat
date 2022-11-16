import db from "./../db/connection";
import { DataTypes } from "sequelize";

const User = db.define('User',{
    name: {
        type: DataTypes.STRING,

    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        
    },
    date_birth: {
        type: DataTypes.DATE,
        
    },
    status: {
        type: DataTypes.NUMBER,
        defaultValue: 1,
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: "no image"
    },
});


export default User;

