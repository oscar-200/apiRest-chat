"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./../db/connection"));
const sequelize_1 = require("sequelize");
const Message = connection_1.default.define('Message', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: 'User'
    },
    conversation_id: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        references: 'Conversation'
    },
    is_readed: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 0
    }
});
exports.default = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvbWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvRUFBb0M7QUFDcEMseUNBQXNDO0FBRXRDLE1BQU0sT0FBTyxHQUFHLG9CQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQztJQUNoQyxFQUFFLEVBQUU7UUFDQSxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGFBQWEsRUFBRSxJQUFJO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELE9BQU8sRUFBRTtRQUNMLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLE1BQU07S0FDckI7SUFDRCxlQUFlLEVBQUU7UUFDYixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxjQUFjO0tBQzdCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixZQUFZLEVBQUUsQ0FBQztLQUNsQjtDQUNKLENBQUMsQ0FBQztBQUdILGtCQUFlLE9BQU8sQ0FBQyJ9