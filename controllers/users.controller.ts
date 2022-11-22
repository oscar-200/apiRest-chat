import { Request, Response } from "express";
import User from "../models/user";
import {uid} from "uid";
import bcryptjs from "bcryptjs";


export const getUsers = async (req: Request, res: Response) => {
    
    const users = await User.findAll({ where: {status: 1} })

    

    res.json({users})
}

export const getUser =async (req: Request, res: Response) => {
    const {uid} = req.params;

    const user = JSON.parse(JSON.stringify(await User.findByPk(uid)));



    res.json({user});
}

export const createUser = async (req: Request, res: Response) => {
    
    const {name, last_name, username, email, password, date_birth} = req.body;

    const salt = bcryptjs.genSaltSync();
    const passwordEncrypt = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({id: uid() ,name, last_name, username, email, password: passwordEncrypt, date_birth});

    const contra = bcryptjs.encodeBase64(password,  1);
    await newUser.save();

    res.json({newUser, contra})
}

export const updateUser =async (req: Request, res: Response) => {
    const { uid } = req.params;
    const { id, createdAt, UpadatedAt, status, ...resto } = req.body;

    const userUpdated = await User.update(resto, {where: {id: uid}});

    res.json({userUpdated, msg: "Usuario actualizado"});
}

export const deleteUser =async (req: Request, res: Response) => {
    const {uid} = req.params;

    if(! await User.findByPk(uid)){
        return res.status(400).json({msg: `Usuario con ID: ${uid} no esta registrado...`})
    }

    const userDeleted = User.update({status: 0}, {where: {id: uid}});

    res.json({userDeleted, msg: "Usuario eliminado"});
}


