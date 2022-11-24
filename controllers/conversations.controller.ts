import { Request, Response } from "express";
import Conversation from "../models/conversations";


export const createConversation =async (req:Request, res:Response) => {
    const {sender_id, receptor_id} = req.body;

    const conversation = await Conversation.create({sender_id, receptor_id});
    await conversation.save();

    res.json({conversation});
}