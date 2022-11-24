"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const conversations_controller_1 = require("../controllers/conversations.controller");
const jwt_validator_1 = require("../middlewares/jwt-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.post('/', [
    jwt_validator_1.validarJWT,
    (0, express_validator_1.check)('sender_id', 'sender_id obligatorio').notEmpty(),
    (0, express_validator_1.check)('receptor_id', 'receptor_id obligatorio').notEmpty(),
    validar_campos_1.validarCampos
], conversations_controller_1.createConversation);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2F0aW9ucy5yb3V0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvY29udmVyc2F0aW9ucy5yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMseURBQTBDO0FBQzFDLHNGQUE2RTtBQUM3RSxnRUFBMEQ7QUFDMUQsa0VBQThEO0FBRTlELE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ2IsMEJBQVU7SUFDVixJQUFBLHlCQUFLLEVBQUMsV0FBVyxFQUFFLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUFFO0lBQ3RELElBQUEseUJBQUssRUFBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDMUQsOEJBQWE7Q0FDaEIsRUFBQyw2Q0FBa0IsQ0FBQyxDQUFDO0FBRXRCLGtCQUFlLE1BQU0sQ0FBQyJ9