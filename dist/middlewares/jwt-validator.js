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
exports.validarJWT = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validarJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        });
    }
    try {
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY || '');
        //Leer usuario que corresponde al uid
        const usuario = yield user_1.default.findAll({ where: { status: 1, id: uid } });
        if (!usuario) {
            return res.status(401).json({
                msg: "Token no valido... - Usuario no existe en DB"
            });
        }
        //req.usuario = usuario;
        Object.defineProperty(req, 'usuario', usuario);
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Token no válido..."
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21pZGRsZXdhcmVzL2p3dC12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMERBQWtDO0FBQ2xDLGdFQUErQjtBQU14QixNQUFNLFVBQVUsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBRWhGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFcEMsSUFBRyxDQUFDLEtBQUssRUFBQztRQUNOLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsR0FBRyxFQUFFLDZCQUE2QjtTQUNyQyxDQUFDLENBQUE7S0FDTDtJQUVELElBQUk7UUFFQSxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFlLENBQUM7UUFJcEYscUNBQXFDO1FBQ3JDLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQyxFQUFFLENBQUMsQ0FBQTtRQUVuRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEIsR0FBRyxFQUFFLDhDQUE4QzthQUN0RCxDQUFDLENBQUE7U0FDTDtRQUdELHdCQUF3QjtRQUN4QixNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFFOUMsSUFBSSxFQUFFLENBQUM7S0FDVjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQixHQUFHLEVBQUUsb0JBQW9CO1NBQzVCLENBQUMsQ0FBQTtLQUNMO0FBSUwsQ0FBQyxDQUFBLENBQUE7QUF2Q1ksUUFBQSxVQUFVLGNBdUN0QiJ9