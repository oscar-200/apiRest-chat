"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existUserById = void 0;
const user_1 = __importDefault(require("../models/user"));
const existUserById = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield user_1.default.findByPk(uid))) {
        throw new Error(`El usuario con ID: ${uid} no existe...`);
    }
});
exports.existUserById = existUserById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2hlbHBlci9kYi12YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFpQztBQUcxQixNQUFNLGFBQWEsR0FBRyxDQUFPLEdBQVcsRUFBRSxFQUFFO0lBQy9DLElBQUcsQ0FBRSxDQUFBLE1BQU0sY0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxFQUFDO1FBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsZUFBZSxDQUFDLENBQUE7S0FDNUQ7QUFDTCxDQUFDLENBQUEsQ0FBQTtBQUpZLFFBQUEsYUFBYSxpQkFJekIifQ==