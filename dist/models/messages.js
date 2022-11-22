"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./../db/connection"));
const sequelize_1 = require("sequelize");
const Message = connection_1.default.define('Message', {
    receiver: {
        type: sequelize_1.DataTypes.STRING,
        references: 'User',
        allowNull: false
    },
    mailer: {
        type: sequelize_1.DataTypes.STRING,
        references: 'User',
        allowNull: false
    },
    hour: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    message: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    room: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "0"
    },
});
exports.default = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvbWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvRUFBb0M7QUFDcEMseUNBQXNDO0FBRXRDLE1BQU0sT0FBTyxHQUFHLG9CQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQztJQUNoQyxRQUFRLEVBQUU7UUFDTixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixVQUFVLEVBQUUsTUFBTTtRQUNsQixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7UUFDcEIsU0FBUyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO1FBQ3BCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsWUFBWSxFQUFFLEdBQUc7S0FDcEI7Q0FDSixDQUFDLENBQUM7QUFHSCxrQkFBZSxPQUFPLENBQUMifQ==