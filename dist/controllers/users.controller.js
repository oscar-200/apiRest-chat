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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const uid_1 = require("uid");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll({ where: { status: 1 } });
    res.json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const user = yield user_1.default.findByPk(uid);
    res.json({ user });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, date_birth, image } = req.body;
    const salt = bcryptjs_1.default.genSaltSync();
    const passwordEncrypt = bcryptjs_1.default.hashSync(password, salt);
    const newUser = yield user_1.default.create({ id: (0, uid_1.uid)(), name, email, password: passwordEncrypt, date_birth, image });
    yield newUser.save();
    res.json({ newUser });
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _a = req.body, { id, password, createdAt, UpadatedAt, status } = _a, resto = __rest(_a, ["id", "password", "createdAt", "UpadatedAt", "status"]);
    const userUpdated = yield user_1.default.update(resto, { where: { id: uid } });
    res.json({ userUpdated, msg: "Usuario actualizado" });
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    if (!(yield user_1.default.findByPk(uid))) {
        return res.status(400).json({ msg: `Usuario con ID: ${uid} no esta registrado...` });
    }
    const userDeleted = user_1.default.update({ status: 0 }, { where: { id: uid } });
    res.json({ userDeleted, msg: "Usuario eliminado" });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwREFBa0M7QUFDbEMsNkJBQXdCO0FBQ3hCLHdEQUFnQztBQUd6QixNQUFNLFFBQVEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUUxRCxNQUFNLEtBQUssR0FBRyxNQUFNLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXhELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQ3JCLENBQUMsQ0FBQSxDQUFBO0FBTFksUUFBQSxRQUFRLFlBS3BCO0FBRU0sTUFBTSxPQUFPLEdBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFekIsTUFBTSxJQUFJLEdBQUcsTUFBTSxjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXRDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQSxDQUFBO0FBTlksUUFBQSxPQUFPLFdBTW5CO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFFNUQsTUFBTSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRTVELE1BQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsTUFBTSxlQUFlLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFBLFNBQUcsR0FBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUUxRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVyQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQTtBQUN2QixDQUFDLENBQUEsQ0FBQTtBQVhZLFFBQUEsVUFBVSxjQVd0QjtBQUVNLE1BQU0sVUFBVSxHQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzNELE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzNCLE1BQU0sS0FBNEQsR0FBRyxDQUFDLElBQUksRUFBcEUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxPQUF1QixFQUFsQixLQUFLLGNBQXZELHVEQUF5RCxDQUFXLENBQUM7SUFFM0UsTUFBTSxXQUFXLEdBQUcsTUFBTSxjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUM7SUFFakUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQSxDQUFBO0FBUFksUUFBQSxVQUFVLGNBT3RCO0FBRU0sTUFBTSxVQUFVLEdBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDM0QsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFekIsSUFBRyxDQUFFLENBQUEsTUFBTSxjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBLEVBQUM7UUFDMUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxtQkFBbUIsR0FBRyx3QkFBd0IsRUFBQyxDQUFDLENBQUE7S0FDckY7SUFFRCxNQUFNLFdBQVcsR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUVqRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBQyxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFBLENBQUE7QUFWWSxRQUFBLFVBQVUsY0FVdEIifQ==