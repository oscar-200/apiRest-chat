"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./../db/connection"));
const sequelize_1 = require("sequelize");
const User = connection_1.default.define('User', {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    date_birth: {
        type: sequelize_1.DataTypes.DATE,
    },
    status: {
        type: sequelize_1.DataTypes.NUMBER,
        defaultValue: 1,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "no image"
    },
});
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0VBQW9DO0FBQ3BDLHlDQUFzQztBQUV0QyxNQUFNLElBQUksR0FBRyxvQkFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7SUFDMUIsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUV6QjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsTUFBTSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07S0FFekI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJO0tBRXZCO0lBQ0QsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixZQUFZLEVBQUUsQ0FBQztLQUNsQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsWUFBWSxFQUFFLFVBQVU7S0FDM0I7Q0FDSixDQUFDLENBQUM7QUFHSCxrQkFBZSxJQUFJLENBQUMifQ==