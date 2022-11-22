"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_controller_1 = require("../controllers/messages.controller");
const router = (0, express_1.Router)();
router.get('/:id_receiver/:id_mailer');
router.post('/', messages_controller_1.createMessage);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL21lc3NhZ2VzLnJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFpQztBQUNqQyw0RUFBbUU7QUFFbkUsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLG1DQUFhLENBQUMsQ0FBQztBQUUvQixrQkFBZSxNQUFNLENBQUMifQ==