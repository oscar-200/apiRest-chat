"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_controller_1 = require("../controllers/users.controller");
const db_validators_1 = require("../helper/db-validators");
const jwt_validator_1 = require("../middlewares/jwt-validator");
const validar_campos_1 = require("../middlewares/validar-campos");
const router = (0, express_1.Router)();
router.get('/', [jwt_validator_1.validarJWT, validar_campos_1.validarCampos], users_controller_1.getUsers);
router.get('/:uid', [
    jwt_validator_1.validarJWT,
    (0, express_validator_1.check)('uid', 'El id no se encuentra en la base de datos').custom(db_validators_1.existUserById),
    validar_campos_1.validarCampos
], users_controller_1.getUser);
router.post('/', [
    jwt_validator_1.validarJWT,
    (0, express_validator_1.check)('name', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('last_name', 'El apellido es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El email es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('date_birth', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], users_controller_1.createUser);
router.put('/:uid', [
    jwt_validator_1.validarJWT,
    (0, express_validator_1.check)('uid', 'El uid es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], users_controller_1.updateUser);
router.delete('/:uid', [
    jwt_validator_1.validarJWT,
    (0, express_validator_1.check)('uid', 'El uid es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL3VzZXJzLnJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFpQztBQUNqQyx5REFBMEM7QUFFMUMsc0VBQXdHO0FBQ3hHLDJEQUF3RDtBQUN4RCxnRUFBMEQ7QUFDMUQsa0VBQThEO0FBSzlELE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUNkLENBQUMsMEJBQVUsRUFBRSw4QkFBYSxDQUFDLEVBQUUsMkJBQVEsQ0FBQyxDQUFDO0FBRXZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDO0lBQ2YsMEJBQVU7SUFDVixJQUFBLHlCQUFLLEVBQUMsS0FBSyxFQUFFLDJDQUEyQyxDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUM7SUFDL0UsOEJBQWE7Q0FDaEIsRUFBQywwQkFBTyxDQUFDLENBQUM7QUFFWCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNiLDBCQUFVO0lBQ1YsSUFBQSx5QkFBSyxFQUFDLE1BQU0sRUFBQywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUN4RCxJQUFBLHlCQUFLLEVBQUMsV0FBVyxFQUFDLDRCQUE0QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQy9ELElBQUEseUJBQUssRUFBQyxVQUFVLEVBQUMscUNBQXFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDdkUsSUFBQSx5QkFBSyxFQUFDLE9BQU8sRUFBQyx5QkFBeUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUN4RCxJQUFBLHlCQUFLLEVBQUMsVUFBVSxFQUFDLDRCQUE0QixDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQzlELElBQUEseUJBQUssRUFBQyxZQUFZLEVBQUUsdUNBQXVDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDNUUsOEJBQWE7Q0FDaEIsRUFBQyw2QkFBVSxDQUFDLENBQUM7QUFFZCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtJQUNoQiwwQkFBVTtJQUNWLElBQUEseUJBQUssRUFBQyxLQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDcEQsOEJBQWE7Q0FDaEIsRUFBQyw2QkFBVSxDQUFDLENBQUM7QUFFZCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQztJQUNsQiwwQkFBVTtJQUNWLElBQUEseUJBQUssRUFBQyxLQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDcEQsOEJBQWE7Q0FDaEIsRUFBQyw2QkFBVSxDQUFDLENBQUM7QUFHZCxrQkFBZSxNQUFNLENBQUMifQ==