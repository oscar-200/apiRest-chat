import { Router } from "express";
import { check } from "express-validator";
import { createMessage, getMessages } from "../controllers/messages.controller";
import { validarCampos } from "../middlewares/validar-campos";

const router = Router();

router.post('/',[
    check('content', 'content obligatorio').notEmpty(),
    check('user_id', 'user_id obligatorio').notEmpty(),
    check('conversation_id', 'conversation_id obligatorio').notEmpty()
],createMessage);

router.get('/:sender_id/:receptor_id', [
    check('sender_id', 'sender_id es obligatorio').notEmpty(),
    check('receptor_id', 'receptor_id es obligatorio').notEmpty(),
    check('page', 'page es obligatorio').notEmpty(),
    validarCampos
],getMessages)

export default router;