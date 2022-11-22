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
exports.comprobarJWT = exports.generarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const generarJWT = (uid = '') => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, process.env.SECRETORPRIVATEKEY || '', {
            expiresIn: '4h'
        }, (error, token) => {
            if (error) {
                console.log(error);
                reject('No se pudo generar el token');
            }
            else
                resolve(token);
        });
    });
});
exports.generarJWT = generarJWT;
const comprobarJWT = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token.length < 10) {
            return null;
        }
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY || '');
        const usuario = JSON.parse(JSON.stringify(yield user_1.default.findByPk(uid)));
        if (usuario) {
            if (!usuario.status)
                return null;
            return usuario;
        }
        return null;
    }
    catch (error) {
        return null;
    }
});
exports.comprobarJWT = comprobarJWT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyL2p3dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0I7QUFDL0IsMERBQWtDO0FBVTNCLE1BQU0sVUFBVSxHQUFHLENBQU8sR0FBRyxHQUFDLEVBQUUsRUFBRSxFQUFFO0lBRXZDLE9BQU8sSUFBSSxPQUFPLENBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFFcEMsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUV4QixzQkFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLEVBQUU7WUFDcEQsU0FBUyxFQUFFLElBQUk7U0FDbEIsRUFBRSxDQUFDLEtBQW1CLEVBQUUsS0FBeUIsRUFBQyxFQUFFO1lBQ2pELElBQUcsS0FBSyxFQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBRSw2QkFBNkIsQ0FBRSxDQUFDO2FBQzNDOztnQkFBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFBO0FBZlksUUFBQSxVQUFVLGNBZXRCO0FBRU0sTUFBTSxZQUFZLEdBQUcsQ0FBTyxLQUFhLEVBQUUsRUFBRTtJQUNoRCxJQUFJO1FBQ0EsSUFBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBQztZQUNqQixPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLHNCQUFHLENBQUMsTUFBTSxDQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBZSxDQUFDO1FBQ3JGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLGNBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBR3JFLElBQUcsT0FBTyxFQUFDO1lBQ1AsSUFBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNO2dCQUNkLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FFZjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUMsQ0FBQSxDQUFBO0FBcEJZLFFBQUEsWUFBWSxnQkFvQnhCIn0=