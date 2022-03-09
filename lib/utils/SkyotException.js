"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotException = void 0;
function SkyotException(message, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
}
exports.SkyotException = SkyotException;
//# sourceMappingURL=SkyotException.js.map