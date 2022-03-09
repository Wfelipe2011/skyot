"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotFirebase = void 0;
const __1 = require("../..");
const SkyotException_1 = require("../../utils/SkyotException");
class SkyotFirebase {
    constructor(path, firebaseConfig) {
        this.path = path;
        this.firebaseConfig = firebaseConfig;
    }
    async upload(file) {
        if (!file)
            throw new SkyotException_1.SkyotException("File is mandatory");
        const name = `${Date.now()}.${file.mimetype.split("/").pop()}`;
        const path = `${this.path}/${name}`;
        const url = `https://storage.googleapis.com/${this.firebaseConfig.storageUrl}/${path}`;
        const firebaseFile = this.firebaseConfig.bucket.file(path);
        const stream = firebaseFile.createWriteStream({
            metadata: {
                contentType: file.mimetype,
            },
        });
        return new Promise((resolve, reject) => {
            stream.on("error", (e) => {
                (0, __1.logger)(e.message);
                reject(e);
            });
            stream.on("finish", async () => {
                await firebaseFile.makePublic();
                (0, __1.logger)(`finish ${path}`);
                resolve({ url });
            });
            stream.end(file.buffer);
        });
    }
    async delete(url) {
        if (!url)
            throw new SkyotException_1.SkyotException("url is mandatory");
        const replaceHttp = (value) => value.replace(`https://storage.googleapis.com/${this.firebaseConfig.storageUrl}/`, "");
        return await this.firebaseConfig.bucket
            .file(replaceHttp(url))
            .delete()
            .catch((e) => (0, __1.logger)(e));
    }
}
exports.SkyotFirebase = SkyotFirebase;
//# sourceMappingURL=index.js.map