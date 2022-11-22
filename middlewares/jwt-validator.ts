import { NextFunction, Request, Response } from "express";
import User from '../models/user';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    uid: string
}

export const validarJWT = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.header("x-token");

    if(!token){
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload;
        
        

        //Leer usuario que corresponde al uid
        const usuario = await User.findAll({ where: {status: 1, id: uid} })

        if( !usuario ){
            return res.status(401).json({
                msg: "Token no valido... - Usuario no existe en DB"
            })
        }


        //req.usuario = usuario;
        Object.defineProperty(req, 'usuario', usuario)

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: "Token no válido..."
        })
    }

    

}