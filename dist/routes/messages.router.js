"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const messages_controller_1 = require("../controllers/messages.controller");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('content', 'content obligatorio').notEmpty(),
    (0, express_validator_1.check)('user_id', 'user_id obligatorio').notEmpty(),
    (0, express_validator_1.check)('conversation_id', 'conversation_id obligatorio').notEmpty()
], messages_controller_1.createMessage);
router.get('/:id_userOne/:id_userTwo', [
    (0, express_validator_1.check)('id_userOne', 'id_userOne es obligatorio').notEmpty(),
    (0, express_validator_1.check)('id_userTwo', 'id_userTwo es obligatorio').notEmpty(),
    (0, express_validator_1.check)('page', 'page es obligatorio').notEmpty(),
    validar_campos_1.validarCampos
], messages_controller_1.getMessages);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL21lc3NhZ2VzLnJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFpQztBQUNqQyx5REFBMEM7QUFDMUMsNEVBQWdGO0FBQ2hGLGtFQUE4RDtBQUU5RCxNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztBQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQztJQUNaLElBQUEseUJBQUssRUFBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDbEQsSUFBQSx5QkFBSyxFQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNsRCxJQUFBLHlCQUFLLEVBQUMsaUJBQWlCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQyxRQUFRLEVBQUU7Q0FDckUsRUFBQyxtQ0FBYSxDQUFDLENBQUM7QUFFakIsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRTtJQUNuQyxJQUFBLHlCQUFLLEVBQUMsWUFBWSxFQUFFLDJCQUEyQixDQUFDLENBQUMsUUFBUSxFQUFFO0lBQzNELElBQUEseUJBQUssRUFBQyxZQUFZLEVBQUUsMkJBQTJCLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDM0QsSUFBQSx5QkFBSyxFQUFDLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUMvQyw4QkFBYTtDQUNoQixFQUFDLGlDQUFXLENBQUMsQ0FBQTtBQUVkLGtCQUFlLE1BQU0sQ0FBQyJ9