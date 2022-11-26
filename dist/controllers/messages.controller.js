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
exports.getMessages = exports.createMessage = void 0;
const conversations_1 = __importDefault(require("../models/conversations"));
const messages_1 = __importDefault(require("../models/messages"));
const sequelize_1 = require("sequelize");
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { content, user_id, conversation_id, is_readed } = req.body;
    const data = {
        content,
        user_id,
        conversation_id,
        is_readed,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };
    const newMessage = yield messages_1.default.create(data);
    yield newMessage.save();
    res.json({
        newMessage
    });
});
exports.createMessage = createMessage;
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_userOne, id_userTwo } = req.params;
    const { page } = req.body;
    const conversation = yield conversations_1.default.findAll({ where: {
            [sequelize_1.Op.or]: [
                { sender_id: id_userOne },
                { sender_id: id_userTwo }
            ],
            [sequelize_1.Op.or]: [
                { receptor_id: id_userOne },
                { receptor_id: id_userTwo }
            ]
        } });
    if (!conversation) {
        return res.status(400).json({ msg: "No existe conversacion entre estos usuarios" });
    }
    const conversationJson = JSON.parse(JSON.stringify(conversation[0]));
    const [messages, total] = yield Promise.all([
        messages_1.default.findAll({ where: { conversation_id: conversationJson.id }, order: [['id', 'DESC']], offset: ((page - 1) * 10), limit: 10 }),
        messages_1.default.count({ where: { conversation_id: conversationJson.id } })
    ]);
    const messagesJson = JSON.parse(JSON.stringify(messages)).sort((a, b) => a.id - b.id);
    res.json({ total, messagesJson });
});
exports.getMessages = getMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL21lc3NhZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEVBQW1EO0FBQ25ELGtFQUF5QztBQUN6Qyx5Q0FBZ0M7QUFHekIsTUFBTSxhQUFhLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDL0QsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFbEUsTUFBTSxJQUFJLEdBQUc7UUFDVCxPQUFPO1FBQ1AsT0FBTztRQUNQLGVBQWU7UUFDZixTQUFTO1FBQ1QsU0FBUyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztLQUNyRSxDQUFBO0lBRUQsTUFBTSxVQUFVLEdBQUcsTUFBTSxrQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxNQUFNLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV4QixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ0wsVUFBVTtLQUNiLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQSxDQUFBO0FBakJZLFFBQUEsYUFBYSxpQkFpQnpCO0FBRU0sTUFBTSxXQUFXLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFN0QsTUFBTSxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzVDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRXhCLE1BQU0sWUFBWSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUU7WUFDcEQsQ0FBQyxjQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ0wsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDO2dCQUN0QixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUM7YUFDekI7WUFDRCxDQUFDLGNBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDTCxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUM7Z0JBQ3hCLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQzthQUMzQjtTQUNKLEVBQUMsQ0FBQyxDQUFDO0lBRUosSUFBRyxDQUFDLFlBQVksRUFBQztRQUNiLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsNkNBQTZDLEVBQUMsQ0FBQyxDQUFDO0tBQ3JGO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxrQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztRQUMzSCxrQkFBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsRUFBQyxDQUFDO0tBQ2pFLENBQUMsQ0FBQztJQUVILE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQU0sRUFBQyxDQUFNLEVBQUMsRUFBRSxDQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUEsQ0FBQTtBQTlCWSxRQUFBLFdBQVcsZUE4QnZCIn0=