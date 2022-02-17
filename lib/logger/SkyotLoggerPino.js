"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.SkyotLoggerPino = void 0;
const pino_1 = __importDefault(require("pino"));
const SkyotLoggerPino = (0, pino_1.default)({
    level: 'debug',
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
        },
    },
});
exports.SkyotLoggerPino = SkyotLoggerPino;
function logger(message) {
    SkyotLoggerPino.info(message);
}
exports.logger = logger;
//# sourceMappingURL=SkyotLoggerPino.js.map