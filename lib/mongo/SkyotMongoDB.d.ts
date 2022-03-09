import mongoose from "mongoose";
export declare class SkyotMongoDB {
    readonly mongoose: mongoose.Model<any, {}, {}, {}>;
    constructor(mongoose: mongoose.Model<any, {}, {}, {}>);
    getAll<T>(): mongoose.Query<T[], T, {}, any>;
    getOne<T>(obj: any): Promise<T | null>;
    save<T>(obj: T): Promise<any>;
    update(id: any, obj: any): Promise<any>;
    delete(id: any): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
