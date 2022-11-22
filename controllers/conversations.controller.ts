import { Request, Response } from "express";


export const createConversation =async (req:Request, res:Response) => {
    const {sender_id, receptor_id} = req.body;

    
}