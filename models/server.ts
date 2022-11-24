import path from "path";

import  express, {Application} from "express";
import cors from "cors";

import userRoutes from "../routes/users.router";
import messageRouter from '../routes/messages.router'
import sequelize from "../db/connection";
import authRouter from '../routes/auth.router'
import conversationRouter from '../routes/conversations.router'

interface PathRoutes {
    users: string,
    messages: string,
    auth: string,
    conversations: string
}


class Server{

    private app: Application;
    private pathRoutes: PathRoutes;
    private port: string;
    private publicPath: string;


    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8080";
        this.publicPath = path.resolve(__dirname, '../public');
        this.pathRoutes = {
            users: '/api/users', 
            messages: '/api/messages', 
            auth: '/api/auth',
            conversations: '/api/conversations'
        }
        this.middlewares();
        this.routes();
        this.dataBase();
    }

    dataBase(){

        try {
            sequelize.authenticate();
            console.log('DB online'.green);
            
        } catch (error) {
            throw new Error("Error: " + error);
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(this.publicPath));     
    }

    routes(){
        this.app.use(this.pathRoutes.users, userRoutes);
        this.app.use(this.pathRoutes.messages, messageRouter);
        this.app.use(this.pathRoutes.auth, authRouter);
        this.app.use(this.pathRoutes.conversations, conversationRouter);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server on port: ${this.port}`.blue);
        });
    }
}

export default Server;