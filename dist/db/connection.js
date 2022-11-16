"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('apirest-chat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
exports.default = sequelize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RiL2Nvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFHcEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGNBQWMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO0lBQ3hELElBQUksRUFBRSxXQUFXO0lBQ2pCLE9BQU8sRUFBRSxPQUFPLENBQUEsbUdBQW1HO0NBQ3RILENBQUMsQ0FBQztBQUVILGtCQUFlLFNBQVMsQ0FBQyJ9