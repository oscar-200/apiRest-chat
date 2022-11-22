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
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            else
                resolve(token);
        });
    });
};
const comprobarJWT = (token = []) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token.length < 10) {
            return null;
        }
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const usuario = yield User.findByPk(uid);
        if (usuario) {
            if (!usuario.estado)
                return null;
            return usuario;
        }
        return null;
    }
    catch (error) {
        return null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0X2dlbmVyYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyL2p3dF9nZW5lcmF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUV4QyxNQUFNLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBQyxFQUFFLEVBQUUsRUFBRTtJQUUxQixPQUFPLElBQUksT0FBTyxDQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBRXBDLE1BQU0sT0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTtZQUM5QyxTQUFTLEVBQUUsSUFBSTtTQUNsQixFQUFFLENBQUMsR0FBVSxFQUFFLEtBQWEsRUFBQyxFQUFFO1lBQzVCLElBQUcsR0FBRyxFQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBRSw2QkFBNkIsQ0FBRSxDQUFDO2FBQzNDOztnQkFBSyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFHLENBQU8sS0FBSyxHQUFHLEVBQUUsRUFBRSxFQUFFO0lBQ3RDLElBQUk7UUFDQSxJQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV6QyxJQUFHLE9BQU8sRUFBQztZQUNQLElBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTTtnQkFDZCxPQUFPLElBQUksQ0FBQztZQUNoQixPQUFPLE9BQU8sQ0FBQztTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBRWY7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDLENBQUEsQ0FBQSJ9