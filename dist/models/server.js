"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_router_1 = __importDefault(require("../routes/users.router"));
const messages_router_1 = __importDefault(require("../routes/messages.router"));
const connection_1 = __importDefault(require("../db/connection"));
const auth_router_1 = __importDefault(require("../routes/auth.router"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8080";
        this.publicPath = path_1.default.resolve(__dirname, '../../public');
        this.pathRoutes = { users: '/api/users', messages: '/api/messages', auth: '/api/auth' };
        this.middlewares();
        this.routes();
        this.dataBase();
    }
    dataBase() {
        try {
            connection_1.default.authenticate();
            console.log('DB online'.green);
        }
        catch (error) {
            throw new Error("Error: " + error);
        }
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static(this.publicPath));
    }
    routes() {
        this.app.use(this.pathRoutes.users, users_router_1.default);
        this.app.use(this.pathRoutes.messages, messages_router_1.default);
        this.app.use(this.pathRoutes.auth, auth_router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server on port: ${this.port}`.blue);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUV4QixzREFBOEM7QUFDOUMsZ0RBQXdCO0FBRXhCLDBFQUFnRDtBQUNoRCxnRkFBcUQ7QUFDckQsa0VBQXlDO0FBQ3pDLHdFQUE4QztBQVM5QyxNQUFNLE1BQU07SUFRUjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxRQUFRO1FBRUosSUFBSTtZQUNBLG9CQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FFbEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsc0JBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLHlCQUFhLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxxQkFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUUsRUFBRTtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDcEQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxNQUFNLENBQUMifQ==