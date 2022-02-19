"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotCrypto = void 0;
const crypto_js_1 = __importStar(require("crypto-js"));
class SkyotCrypto {
    static encryptedSHA256(value) {
        if (!value)
            throw new Error(`Not found value: ${value}`);
        const encrypted = (0, crypto_js_1.SHA256)(this.stringify(value)).toString();
        return encrypted;
    }
    static encrypted(value, secretKey) {
        this.checkExistsParams(value, secretKey);
        return crypto_js_1.default.AES.encrypt(this.stringify(value), secretKey).toString();
    }
    static decrypted(value, secretKey) {
        this.checkExistsParams(value, secretKey);
        const bytes = crypto_js_1.default.AES.decrypt(value, secretKey);
        return bytes.toString(crypto_js_1.default.enc.Utf8);
    }
    static checkExistsParams(value, secretKey) {
        if (!value)
            throw new Error(`Not found value: ${value}`);
        if (!secretKey)
            throw new Error(`Not found secretKey: ${secretKey}`);
    }
    static stringify(value) {
        return JSON.stringify(value);
    }
}
exports.SkyotCrypto = SkyotCrypto;
//# sourceMappingURL=SkyotCrypto.js.map