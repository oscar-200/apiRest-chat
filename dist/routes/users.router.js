"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_controller_1 = require("../controllers/users.controller");
const db_validators_1 = require("../helper/db-validators");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', users_controller_1.getUsers);
router.get('/:uid', [
    (0, express_validator_1.check)('uid', 'El id no se encuentra en la base de datos').custom(db_validators_1.existUserById),
    validar_campos_1.validarCampos
], users_controller_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El email es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], users_controller_1.createUser);
router.put('/:uid', [
    (0, express_validator_1.check)('uid', 'El uid es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], users_controller_1.updateUser);
router.delete('/:uid', [
    (0, express_validator_1.check)('uid', 'El uid es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL3VzZXJzLnJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFpQztBQUNqQyx5REFBMEM7QUFFMUMsc0VBQXdHO0FBQ3hHLDJEQUF3RDtBQUN4RCxrRUFBOEQ7QUFLOUQsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsMkJBQVEsQ0FBQyxDQUFDO0FBRTFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDO0lBQ2YsSUFBQSx5QkFBSyxFQUFDLEtBQUssRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDO0lBQy9FLDhCQUFhO0NBQ2hCLEVBQUMsMEJBQU8sQ0FBQyxDQUFDO0FBRVgsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDYixJQUFBLHlCQUFLLEVBQUMsTUFBTSxFQUFDLDBCQUEwQixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ3hELElBQUEseUJBQUssRUFBQyxPQUFPLEVBQUMseUJBQXlCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDeEQsSUFBQSx5QkFBSyxFQUFDLFVBQVUsRUFBQyw0QkFBNEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUM5RCw4QkFBYTtDQUNoQixFQUFDLDZCQUFVLENBQUMsQ0FBQztBQUVkLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO0lBQ2hCLElBQUEseUJBQUssRUFBQyxLQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDcEQsOEJBQWE7Q0FDaEIsRUFBQyw2QkFBVSxDQUFDLENBQUM7QUFFZCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQztJQUNsQixJQUFBLHlCQUFLLEVBQUMsS0FBSyxFQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ3BELDhCQUFhO0NBQ2hCLEVBQUMsNkJBQVUsQ0FBQyxDQUFDO0FBR2Qsa0JBQWUsTUFBTSxDQUFDIn0=