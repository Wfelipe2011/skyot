"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const __1 = require("..");
class SkyotDB {
    static async conectMongo(connectionCloud) {
        await mongoose_1.default
            .connect(connectionCloud)
            .then(() => {
            (0, __1.logger)("Conectado ao Banco MongoDB");
        })
            .catch((error) => {
            (0, __1.logger)(`${error}: Erro ao conectar!`);
        });
    }
}
exports.SkyotDB = SkyotDB;
//# sourceMappingURL=infra.js.map