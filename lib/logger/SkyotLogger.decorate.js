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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotLogger = void 0;
const SkyotLoggerPino_1 = require("./SkyotLoggerPino");
function SkyotLogger(params) {
    const state = {};
    return function (target, propertyKey, descriptor) {
        const methodOriginal = descriptor.value;
        descriptor.value = function (...args) {
            return __awaiter(this, void 0, void 0, function* () {
                state.propertyKey = propertyKey;
                state.args = args;
                state.methodOriginal = methodOriginal;
                state.context = this;
                return yield coreDecorator();
            });
        };
    };
    function coreDecorator() {
        return __awaiter(this, void 0, void 0, function* () {
            const { args, methodOriginal, propertyKey, context } = state;
            (0, SkyotLoggerPino_1.logger)(`Method => ${jsonLog(propertyKey)}`);
            (0, SkyotLoggerPino_1.logger)('Params => ' + jsonLog(args));
            const result = yield methodOriginal.apply(context, args);
            (0, SkyotLoggerPino_1.logger)('Return => ' + jsonLog(result));
            return result;
        });
    }
    function jsonLog(obj) {
        return JSON.stringify(obj, null, 2);
    }
}
exports.SkyotLogger = SkyotLogger;
//# sourceMappingURL=SkyotLogger.decorate.js.map