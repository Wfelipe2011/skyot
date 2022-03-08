import { IFirebaseConfig, ISkyotFile } from "./firebaseAdapter.interface";
export declare class SkyotFirebase {
    private path;
    private firebaseConfig;
    constructor(path: string, firebaseConfig: IFirebaseConfig);
    upload(file: ISkyotFile): Promise<{
        url: string;
    }>;
    delete(url: string): Promise<any>;
}
