"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const login_controller_1 = require("../controllers/login.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.post('/login', [
    (0, express_validator_1.check)('email', 'El correo es obligatorio').notEmpty(),
    (0, express_validator_1.check)('email', 'Correo no valido').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').notEmpty(),
    validar_campos_1.validarCampos
], login_controller_1.loginController);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvYXV0aC5yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMseURBQTBDO0FBQzFDLHNFQUFrRTtBQUNsRSxrRUFBOEQ7QUFHOUQsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUM7SUFDakIsSUFBQSx5QkFBSyxFQUFDLE9BQU8sRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNyRCxJQUFBLHlCQUFLLEVBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzVDLElBQUEseUJBQUssRUFBQyxVQUFVLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDNUQsOEJBQWE7Q0FDaEIsRUFBRSxrQ0FBZSxDQUFDLENBQUE7QUFFbkIsa0JBQWUsTUFBTSxDQUFDIn0=