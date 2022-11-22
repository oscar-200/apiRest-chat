import db from "./../db/connection";
import { DataTypes } from "sequelize";

const User = db.define('User',{
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    username: {
        type: DataTypes.STRING,
        allowNull: false

    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date_birth: {
        type: DataTypes.DATE,
        
    },
    status: {
        type: DataTypes.NUMBER,
        defaultValue: 1,
    }
});


export default User;

