import { Router } from "express";
import { check } from "express-validator";
import { loginController } from "../controllers/login.controller";
import { validarCampos } from "../middlewares/validar-campos";


const router = Router();

router.post('/login',[
    check('email', 'El correo es obligatorio').notEmpty(),
    check('email', 'Correo no valido').isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    validarCampos
], loginController)

export default router;