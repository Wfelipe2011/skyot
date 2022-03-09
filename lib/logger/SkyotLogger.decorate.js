"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotLogger = void 0;
const SkyotLoggerPino_1 = require("./SkyotLoggerPino");
function SkyotLogger(params) {
    const state = {};
    return function (target, propertyKey, descriptor) {
        const methodOriginal = descriptor.value;
        descriptor.value = async function (...args) {
            state.propertyKey = propertyKey;
            state.args = args;
            state.methodOriginal = methodOriginal;
            state.context = this;
            return await coreDecorator();
        };
    };
    async function coreDecorator() {
        const { args, methodOriginal, propertyKey, context } = state;
        (0, SkyotLoggerPino_1.logger)(`Method => ${jsonLog(propertyKey)}`);
        (0, SkyotLoggerPino_1.logger)('Params => ' + jsonLog(args));
        const result = await methodOriginal.apply(context, args);
        (0, SkyotLoggerPino_1.logger)('Return => ' + jsonLog(result));
        return result;
    }
    function jsonLog(obj) {
        return JSON.stringify(obj, null, 2);
    }
}
exports.SkyotLogger = SkyotLogger;
//# sourceMappingURL=SkyotLogger.decorate.js.map