import db from "./../db/connection";
import { DataTypes } from "sequelize";

const Message = db.define('Message',{
    receiver: {
        type: DataTypes.STRING,
        references: 'User',
        allowNull: false
    },
    mailer: {
        type: DataTypes.STRING,
        references: 'User',
        allowNull: false
    },
    hour: {
        type: DataTypes.TIME,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    room: {
        type: DataTypes.STRING,
        defaultValue: "0"
    },
});


export default Message;

