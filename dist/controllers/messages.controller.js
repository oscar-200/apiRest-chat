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
    const { sender_id, receptor_id } = req.params;
    const { page } = req.body;
    const conversation = JSON.stringify(yield conversations_1.default.findOne({ where: { sender_id, receptor_id } }));
    if (!conversation) {
        return res.status(400).json({ msg: "No existe conversacion entre estos usuarios" });
    }
    const conversationJson = JSON.parse(conversation);
    const [messages, total] = yield Promise.all([
        messages_1.default.findAll({ where: { conversation_id: conversationJson.id }, offset: ((page - 1) * 10), limit: 10 }),
        messages_1.default.count({ where: { conversation_id: conversationJson.id } })
    ]);
    res.json({
        total,
        messages
    });
});
exports.getMessages = getMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL21lc3NhZ2VzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEVBQW1EO0FBQ25ELGtFQUF5QztBQUdsQyxNQUFNLGFBQWEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMvRCxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUVsRSxNQUFNLElBQUksR0FBRztRQUNULE9BQU87UUFDUCxPQUFPO1FBQ1AsZUFBZTtRQUNmLFNBQVM7UUFDVCxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQ3JFLENBQUE7SUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLGtCQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLE1BQU0sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXhCLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDTCxVQUFVO0tBQ2IsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBLENBQUE7QUFqQlksUUFBQSxhQUFhLGlCQWlCekI7QUFFTSxNQUFNLFdBQVcsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUU3RCxNQUFNLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDNUMsTUFBTSxFQUFDLElBQUksRUFBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFFeEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBRSxNQUFNLHVCQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXhHLElBQUcsQ0FBQyxZQUFZLEVBQUM7UUFDYixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLDZDQUE2QyxFQUFDLENBQUMsQ0FBQztLQUNyRjtJQUVELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxrQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDbEcsa0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxFQUFDLEVBQUMsQ0FBQztLQUNqRSxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ0wsS0FBSztRQUNMLFFBQVE7S0FDWCxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQTtBQXRCWSxRQUFBLFdBQVcsZUFzQnZCIn0=