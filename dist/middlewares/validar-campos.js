"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
const validarCampos = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validarCampos = validarCampos;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhci1jYW1wb3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9taWRkbGV3YXJlcy92YWxpZGFyLWNhbXBvcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx5REFBcUQ7QUFFOUMsTUFBTSxhQUFhLEdBQUcsQ0FBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUcsRUFBRTtJQUUvRSxNQUFNLE1BQU0sR0FBRyxJQUFBLG9DQUFnQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUM7UUFDakIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2QztJQUVELElBQUksRUFBRSxDQUFDO0FBQ1gsQ0FBQyxDQUFBO0FBUlksUUFBQSxhQUFhLGlCQVF6QiJ9