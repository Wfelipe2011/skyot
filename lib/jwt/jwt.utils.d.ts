import jwt from "jsonwebtoken";
export declare class SkyotJWT {
    static generateJwt(obj: any, key?: string, expires?: {
        expiresIn: string;
    }): string;
    static decodeJwt(token: any): jwt.Jwt | null;
}
