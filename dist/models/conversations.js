"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("./../db/connection"));
const Conversation = connection_1.default.define('Conversation', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    sender_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: 'User'
    },
    receptor_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: 'User'
    }
});
exports.default = Conversation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9jb252ZXJzYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXFDO0FBQ3JDLG9FQUFtQztBQUduQyxNQUFNLFlBQVksR0FBRyxvQkFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7SUFDM0MsRUFBRSxFQUFFO1FBQ0EsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixhQUFhLEVBQUUsSUFBSTtRQUNuQixVQUFVLEVBQUUsSUFBSTtLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLE1BQU07S0FDckI7SUFDRCxXQUFXLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxNQUFNO0tBQ3JCO0NBQ0osQ0FBQyxDQUFDO0FBRUgsa0JBQWUsWUFBWSxDQUFDIn0=