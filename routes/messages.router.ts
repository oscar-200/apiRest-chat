import { Router } from "express";
import { createMessage } from "../controllers/messages.controller";

const router = Router();

router.get('/:id_receiver/:id_mailer');
router.post('/',createMessage);

export default router;