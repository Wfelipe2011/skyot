export interface ISkyotFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: any;
    size: number;
}
export interface IFirebaseConfig {
    storageUrl: string;
    bucket: any;
    storage: any;
}
export declare function SkyotException(this: any, { statusCode, message }: {
    message: string;
    statusCode?: number;
}): void;
