import { DataTypes } from "sequelize"
import db from "./../db/connection"


const Conversation = db.define('Conversation', {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    sender_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: 'User'
    },
    receptor_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: 'User'
    }
});

export default Conversation;