import db from "./../db/connection";
import { DataTypes } from "sequelize";

const Message = db.define('Message',{
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: 'User'
    },
    conversation_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: 'Conversation'
    },
    is_readed: {
        type: DataTypes.NUMBER,
        defaultValue: 0
    }
});


export default Message;

