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
    const user = JSON.parse(JSON.stringify(yield user_1.default.findByPk(uid)));
    res.json({ user });
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last_name, username, email, password, date_birth } = req.body;
    const salt = bcryptjs_1.default.genSaltSync();
    const passwordEncrypt = bcryptjs_1.default.hashSync(password, salt);
    const newUser = yield user_1.default.create({ id: (0, uid_1.uid)(), name, last_name, username, email, password: passwordEncrypt, date_birth });
    const contra = bcryptjs_1.default.encodeBase64(password, 1);
    yield newUser.save();
    res.json({ newUser, contra });
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const _a = req.body, { id, createdAt, UpadatedAt, status } = _a, resto = __rest(_a, ["id", "createdAt", "UpadatedAt", "status"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL3VzZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwREFBa0M7QUFDbEMsNkJBQXdCO0FBQ3hCLHdEQUFnQztBQUd6QixNQUFNLFFBQVEsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUUxRCxNQUFNLEtBQUssR0FBRyxNQUFNLGNBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBSXhELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFBO0FBQ3JCLENBQUMsQ0FBQSxDQUFBO0FBUFksUUFBQSxRQUFRLFlBT3BCO0FBRU0sTUFBTSxPQUFPLEdBQUUsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEQsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sY0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFJbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFBLENBQUE7QUFSWSxRQUFBLE9BQU8sV0FRbkI7QUFFTSxNQUFNLFVBQVUsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUU1RCxNQUFNLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRTFFLE1BQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsTUFBTSxlQUFlLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFELE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxJQUFBLFNBQUcsR0FBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFFeEgsTUFBTSxNQUFNLEdBQUcsa0JBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXJCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQTtBQUMvQixDQUFDLENBQUEsQ0FBQTtBQVpZLFFBQUEsVUFBVSxjQVl0QjtBQUVNLE1BQU0sVUFBVSxHQUFFLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzNELE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQzNCLE1BQU0sS0FBa0QsR0FBRyxDQUFDLElBQUksRUFBMUQsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLE9BQXVCLEVBQWxCLEtBQUssY0FBN0MsMkNBQStDLENBQVcsQ0FBQztJQUVqRSxNQUFNLFdBQVcsR0FBRyxNQUFNLGNBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBQyxFQUFDLENBQUMsQ0FBQztJQUVqRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFBLENBQUE7QUFQWSxRQUFBLFVBQVUsY0FPdEI7QUFFTSxNQUFNLFVBQVUsR0FBRSxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMzRCxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUV6QixJQUFHLENBQUUsQ0FBQSxNQUFNLGNBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUEsRUFBQztRQUMxQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLG1CQUFtQixHQUFHLHdCQUF3QixFQUFDLENBQUMsQ0FBQTtLQUNyRjtJQUVELE1BQU0sV0FBVyxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRWpFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFDLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUEsQ0FBQTtBQVZZLFFBQUEsVUFBVSxjQVV0QiJ9