import { SkyotLogger } from "./logger/SkyotLogger.decorate";
import { logger, SkyotLoggerPino } from "./logger/SkyotLoggerPino";
import { SkyotCrypto } from "./crypto/SkyotCrypto";
import { SkyotJWT } from "./jwt/SkyotJwt";
const secretKey = "123";
const messageEncripeted = SkyotCrypto.encrypted("hello world", secretKey);
logger(messageEncripeted);
const messagedDescrypted = SkyotCrypto.descrypted(messageEncripeted, secretKey);
logger(messagedDescrypted);

export { SkyotLoggerPino, logger, SkyotLogger, SkyotCrypto, SkyotJWT };
