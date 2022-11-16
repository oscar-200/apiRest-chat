import User from "../models/user"


export const existUserById = async (uid: string) => {
    if(! await User.findByPk(uid)){
        throw new Error(`El usuario con ID: ${uid} no existe...`)
    }
}