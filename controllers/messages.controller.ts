import { Request, Response } from "express";
import Conversation from "../models/conversations";
import Message from "../models/messages";


export const createMessage = async (req: Request, res: Response) => {
    const { content, user_id, conversation_id, is_readed } = req.body;

    const data = {
        content,
        user_id,
        conversation_id,
        is_readed,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }

    const newMessage = await Message.create(data);
    await newMessage.save();

    res.json({
        newMessage
    });
}

export const getMessages = async (req: Request, res: Response) => {
    
    const {sender_id, receptor_id} = req.params;
    const {page} = req.body;

    const conversation = JSON.stringify( await Conversation.findOne({ where: { sender_id, receptor_id } }));

    if(!conversation){
        return res.status(400).json({msg: "No existe conversacion entre estos usuarios"});
    }

    const conversationJson = JSON.parse(conversation);

    const [messages, total] = await Promise.all([
        Message.findAll({where: {conversation_id: conversationJson.id}, offset: ((page-1)*10), limit: 10}),
        Message.count({where: {conversation_id: conversationJson.id}})
    ]);

    res.json({
        total,
        messages
    });
}