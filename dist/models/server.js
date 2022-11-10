"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_router_1 = __importDefault(require("../routes/users.router"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.path = '/api/users';
        this.port = process.env.PORT || "8080";
        this.publicPath = path_1.default.resolve(__dirname, '../../public');
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(this.publicPath));
    }
    routes() {
        this.app.use(this.path, users_router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port: ${this.port}`.blue);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUV4QixzREFBOEM7QUFDOUMsZ0RBQXdCO0FBRXhCLDBFQUFnRDtBQUdoRCxNQUFNLE1BQU07SUFRUjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEdBQUUsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsc0JBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFFLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBRUQsa0JBQWUsTUFBTSxDQUFDIn0=