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
exports.loginController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../helper/jwt");
const user_1 = __importDefault(require("../models/user"));
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Verificar si el correo existe
        const user = JSON.parse(JSON.stringify((yield user_1.default.findAll({ where: { email } }))))[0];
        if (!user) {
            return res.status(400).json({
                msg: "usuario / password no son correctos - correo"
            });
        }
        // Verificar si el usuario esta activo
        if (user.status === 0) {
            return res.status(400).json({
                msg: "usuario / password no son correctos - estado: false"
            });
        }
        //Verificar las contraseña
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "usuario / password no son correctos - contraseña: no coincide"
            });
        }
        // Generar JWT
        const token = yield (0, jwt_1.generarJWT)(user.id);
        res.json({
            user,
            token
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Algo salio mal'
        });
    }
});
exports.loginController = loginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2xvZ2luLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esd0RBQWdDO0FBQ2hDLHVDQUEyQztBQUMzQywwREFBa0M7QUFFM0IsTUFBTSxlQUFlLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFakUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRXJDLElBQUk7UUFHQSxnQ0FBZ0M7UUFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxjQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4QixHQUFHLEVBQUUsOENBQThDO2FBQ3RELENBQUMsQ0FBQztTQUNOO1FBRUQsc0NBQXNDO1FBRXRDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbkIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEIsR0FBRyxFQUFFLHFEQUFxRDthQUM3RCxDQUFDLENBQUM7U0FDTjtRQUVELDBCQUEwQjtRQUMxQixNQUFNLGFBQWEsR0FBRyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEIsR0FBRyxFQUFFLCtEQUErRDthQUN2RSxDQUFDLENBQUM7U0FDTjtRQUlELGNBQWM7UUFDZCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUEsZ0JBQVUsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFJeEMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNMLElBQUk7WUFDSixLQUFLO1NBQ1IsQ0FBQyxDQUFBO0tBRUw7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakIsR0FBRyxFQUFFLGdCQUFnQjtTQUN4QixDQUFDLENBQUM7S0FDTjtBQUVMLENBQUMsQ0FBQSxDQUFBO0FBbERZLFFBQUEsZUFBZSxtQkFrRDNCIn0=