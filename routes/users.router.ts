import { Router } from "express";
import { check } from "express-validator";

import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.controller";
import { existUserById } from "../helper/db-validators";
import { validarCampos } from "../middlewares/validar-campos";




const router = Router();

router.get('/', getUsers);

router.get('/:uid',[
    check('uid', 'El id no se encuentra en la base de datos').custom(existUserById),
    validarCampos
],getUser);

router.post('/', [
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
],createUser);

router.put('/:uid', [
    check('uid','El uid es obligatorio').not().isEmpty(),
    validarCampos
],updateUser);

router.delete('/:uid',[
    check('uid','El uid es obligatorio').not().isEmpty(),
    validarCampos
],deleteUser);


export default router;