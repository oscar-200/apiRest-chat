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
exports.createConversation = void 0;
const conversations_1 = __importDefault(require("../models/conversations"));
const createConversation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sender_id, receptor_id } = req.body;
    const conversation = yield conversations_1.default.create({ sender_id, receptor_id });
    yield conversation.save();
    res.json({ conversation });
});
exports.createConversation = createConversation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9ucy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvY29udmVyc2F0aW9ucy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDRFQUFtRDtBQUc1QyxNQUFNLGtCQUFrQixHQUFFLENBQU8sR0FBVyxFQUFFLEdBQVksRUFBRSxFQUFFO0lBQ2pFLE1BQU0sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztJQUUxQyxNQUFNLFlBQVksR0FBRyxNQUFNLHVCQUFZLENBQUMsTUFBTSxDQUFDLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFBLENBQUE7QUFQWSxRQUFBLGtCQUFrQixzQkFPOUIifQ==