"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("colors");
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
dotenv_1.default.config();
const server = new server_1.default();
server.listen();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtCQUFnQjtBQUNoQixvREFBNEI7QUFFNUIsNkRBQXFDO0FBR3JDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFJaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxnQkFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDIn0=