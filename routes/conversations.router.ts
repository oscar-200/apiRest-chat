import { Router } from "express";
import { check } from "express-validator";
import { createConversation } from "../controllers/conversations.controller";
import { validarJWT } from "../middlewares/jwt-validator";
import { validarCampos } from "../middlewares/validar-campos";

const router = Router();

router.post('/', [
    validarJWT,
    check('sender_id', 'sender_id obligatorio').notEmpty(),
    check('receptor_id', 'receptor_id obligatorio').notEmpty(),
    validarCampos
],createConversation);

export default router;