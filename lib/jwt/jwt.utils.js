"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class SkyotJWT {
    static generateJwt(obj, key = "123", expires = {
        expiresIn: "1d",
    }) {
        const token = jsonwebtoken_1.default.sign(obj, key, expires);
        return token;
    }
    static decodeJwt(token) {
        return jsonwebtoken_1.default.decode(token, { complete: true });
    }
}
exports.SkyotJWT = SkyotJWT;
//# sourceMappingURL=jwt.utils.js.map