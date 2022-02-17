"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotJWT = exports.SkyotCrypto = exports.SkyotLogger = exports.logger = exports.SkyotLoggerPino = void 0;
const SkyotLogger_decorate_1 = require("./logger/SkyotLogger.decorate");
Object.defineProperty(exports, "SkyotLogger", { enumerable: true, get: function () { return SkyotLogger_decorate_1.SkyotLogger; } });
const SkyotLoggerPino_1 = require("./logger/SkyotLoggerPino");
Object.defineProperty(exports, "logger", { enumerable: true, get: function () { return SkyotLoggerPino_1.logger; } });
Object.defineProperty(exports, "SkyotLoggerPino", { enumerable: true, get: function () { return SkyotLoggerPino_1.SkyotLoggerPino; } });
const SkyotCrypto_1 = require("./crypto/SkyotCrypto");
Object.defineProperty(exports, "SkyotCrypto", { enumerable: true, get: function () { return SkyotCrypto_1.SkyotCrypto; } });
const SkyotJwt_1 = require("./jwt/SkyotJwt");
Object.defineProperty(exports, "SkyotJWT", { enumerable: true, get: function () { return SkyotJwt_1.SkyotJWT; } });
const secretKey = "123";
const messageEncripeted = SkyotCrypto_1.SkyotCrypto.encrypted("hello world", secretKey);
(0, SkyotLoggerPino_1.logger)(messageEncripeted);
const messagedDescrypted = SkyotCrypto_1.SkyotCrypto.descrypted(messageEncripeted, secretKey);
(0, SkyotLoggerPino_1.logger)(messagedDescrypted);
//# sourceMappingURL=index.js.map