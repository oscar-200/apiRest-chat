import { Request, Response } from "express";
import Conversation from "../models/conversations";
import Message from "../models/messages";
import { Op }  from "sequelize";


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
    
    const {id_userOne, id_userTwo} = req.params;
    const {page} = req.body;

    const conversation = await Conversation.findAll({where: {
        [Op.or]: [
            {sender_id:id_userOne},
            {sender_id:id_userTwo}
        ],
        [Op.or]: [
            {receptor_id:id_userOne},
            {receptor_id:id_userTwo}
        ]
    }});

    if(!conversation){
        return res.status(400).json({msg: "No existe conversacion entre estos usuarios"});
    }

    const conversationJson = JSON.parse(JSON.stringify(conversation[0]));

    const [messages, total] = await Promise.all([
        Message.findAll({where: {conversation_id: conversationJson.id}, order: [['id', 'DESC']], offset: ((page-1)*10), limit: 10}),
        Message.count({where: {conversation_id: conversationJson.id}})
    ]);

    const messagesJson = JSON.parse(JSON.stringify(messages)).sort((a: any,b: any)=>a.id-b.id);
    
    res.json({ total, messagesJson });
}