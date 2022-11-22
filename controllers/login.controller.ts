import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import { generarJWT } from "../helper/jwt";
import User from "../models/user";

export const loginController = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try {


        // Verificar si el correo existe
        const user = JSON.parse( JSON.stringify((await User.findAll({ where: {email} }))) )[0];
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
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "usuario / password no son correctos - contraseña: no coincide"
            });
        }



        // Generar JWT
        const token = await generarJWT(user.id);



        res.json({
            user,
            token
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Algo salio mal'
        });
    }

}