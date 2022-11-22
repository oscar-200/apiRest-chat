import { Router } from "express";
import { check } from "express-validator";

import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.controller";
import { existUserById } from "../helper/db-validators";
import { validarJWT } from "../middlewares/jwt-validator";
import { validarCampos } from "../middlewares/validar-campos";




const router = Router();

router.get('/',
[validarJWT, validarCampos], getUsers);

router.get('/:uid',[
    validarJWT,
    check('uid', 'El id no se encuentra en la base de datos').custom(existUserById),
    validarCampos
],getUser);

router.post('/', [
    validarJWT,
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('last_name','El apellido es obligatorio').not().isEmpty(),
    check('username','El nombre de usuario es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('date_birth', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    validarCampos
],createUser);

router.put('/:uid', [
    validarJWT,
    check('uid','El uid es obligatorio').not().isEmpty(),
    validarCampos
],updateUser);

router.delete('/:uid',[
    validarJWT,
    check('uid','El uid es obligatorio').not().isEmpty(),
    validarCampos
],deleteUser);


export default router;