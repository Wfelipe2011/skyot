import jwt from "jsonwebtoken";
export declare class SkyotJWT {
    static generateJwt(obj: any, key?: string, expires?: {
        expiresIn: "1d" | "2 days" | "10h" | "2.5 hrs" | "1y";
    }): string;
    static decodeJwt(token: string): jwt.Jwt | null;
}
