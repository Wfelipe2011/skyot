"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotCrypto = exports.SkyotLogger = exports.logger = exports.SkyotLoggerPino = void 0;
const SkyotLogger_decorate_1 = require("./logger/SkyotLogger.decorate");
Object.defineProperty(exports, "SkyotLogger", { enumerable: true, get: function () { return SkyotLogger_decorate_1.SkyotLogger; } });
const SkyotLoggerPino_1 = require("./logger/SkyotLoggerPino");
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return SkyotLoggerPino_1.logger; } });
Object.defineProperty(exports, "SkyotLoggerPino", { enumerable: true, get: function () { return SkyotLoggerPino_1.SkyotLoggerPino; } });
const SkyotCrypto_1 = require("./crypto/SkyotCrypto");
Object.defineProperty(exports, "SkyotCrypto", { enumerable: true, get: function () { return SkyotCrypto_1.SkyotCrypto; } });
const jwt_utils_1 = require("./jwt/jwt.utils");
const token = jwt_utils_1.SkyotJWT.generateJwt({ name: "Wilson" });
(0, SkyotLoggerPino_1.logger)(token);
var decoded = jwt_utils_1.SkyotJWT.decodeJwt(token);
(0, SkyotLoggerPino_1.logger)(decoded);
//# sourceMappingURL=index.js.map