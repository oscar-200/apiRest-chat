import jwt from 'jsonwebtoken';
import User from '../models/user';
import bcryptjs from "bcryptjs";
import { json } from 'sequelize';
//import { UserInterface } from './userInterface';

interface JwtPayload {
    uid: string
}


export const generarJWT = async (uid='') =>{

    return new Promise( (resolve, reject) => {

        const payload = { uid };
        
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY || '', {
            expiresIn: '4h'
        }, (error: Error | null, token: string | undefined)=>{
            if(error){
                console.log(error);
                reject( 'No se pudo generar el token' );
            }else resolve(token);
        })
    })
}

export const comprobarJWT = async (token: string) => {
    try {
        if(token.length < 10){
            return null;
        }

        const {uid} = jwt.verify( token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload;
        const usuario = JSON.parse(JSON.stringify(await User.findByPk(uid)));


        if(usuario){
            if(!usuario.status)
                return null;
            return usuario;
        }
        return null;
        
    } catch (error) {
        return null;
    }
}