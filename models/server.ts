import path from "path";

import  express, {Application} from "express";
import cors from "cors";

import userRoutes from "../routes/users.router";


class Server{

    private app: Application;
    private path: string;
    private port: string;
    private publicPath: string;


    constructor(){
        this.app = express();
        this.path = '/api/users';
        this.port = process.env.PORT || "8080";
        this.publicPath = path.resolve(__dirname, '../../public');

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(this.publicPath));     
    }

    routes(){
        this.app.use(this.path, userRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server on port: ${this.port}`.blue)
        })
    }
}

export default Server;