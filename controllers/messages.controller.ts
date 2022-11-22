import { Request, Response } from "express";
import Message from "../models/messages";


export const getMessages = async (req: Request, res: Response) => {
    const  {id_receiver, id_mailer} = req.params;

    const messages = await Message.findAll({
        where: {
            receiver: id_receiver,
            mailer: id_mailer
        }});
    
    res.json({
        messages
    });
}

export const createMessage =async (req: Request, res: Response) => {
    const {receiver, mailer, hour, date, message, room} = req.body;
    
    const data = {
        id: "1",
        receiver,
        mailer,
        hour,
        date,
        message,
        room
    }

    console.log(data);

    

    const newMessage = await Message.create(data);
    await newMessage.save();

    res.json({
        newMessage
    });

}