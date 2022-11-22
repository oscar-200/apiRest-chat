"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = exports.getMessages = void 0;
const messages_1 = __importDefault(require("../models/messages"));
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_receiver, id_mailer } = req.params;
    const messages = yield messages_1.default.findAll({
        where: {
            receiver: id_receiver,
            mailer: id_mailer
        }
    });
    res.json({
        messages
    });
});
exports.getMessages = getMessages;
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { receiver, mailer, hour, date, message, room } = req.body;
    const data = {
        id: "1",
        receiver,
        mailer,
        hour,
        date,
        message,
        room
    };
    console.log(data);
    const newMessage = yield messages_1.default.create(data);
    yield newMessage.save();
    res.json({
        newMessage
    });
});
exports.createMessage = createMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL21lc3NhZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQXlDO0FBR2xDLE1BQU0sV0FBVyxHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzdELE1BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUU3QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGtCQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25DLEtBQUssRUFBRTtZQUNILFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE1BQU0sRUFBRSxTQUFTO1NBQ3BCO0tBQUMsQ0FBQyxDQUFDO0lBRVIsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNMLFFBQVE7S0FDWCxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQTtBQVpZLFFBQUEsV0FBVyxlQVl2QjtBQUVNLE1BQU0sYUFBYSxHQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzlELE1BQU0sRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFL0QsTUFBTSxJQUFJLEdBQUc7UUFDVCxFQUFFLEVBQUUsR0FBRztRQUNQLFFBQVE7UUFDUixNQUFNO1FBQ04sSUFBSTtRQUNKLElBQUk7UUFDSixPQUFPO1FBQ1AsSUFBSTtLQUNQLENBQUE7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBSWxCLE1BQU0sVUFBVSxHQUFHLE1BQU0sa0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFeEIsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNMLFVBQVU7S0FDYixDQUFDLENBQUM7QUFFUCxDQUFDLENBQUEsQ0FBQTtBQXhCWSxRQUFBLGFBQWEsaUJBd0J6QiJ9