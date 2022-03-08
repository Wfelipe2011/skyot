"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotFirebase = void 0;
const __1 = require("../..");
const firebaseAdapter_interface_1 = require("./firebaseAdapter.interface");
class SkyotFirebase {
    constructor(path, firebaseConfig) {
        this.path = path;
        this.firebaseConfig = firebaseConfig;
    }
    upload(file) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!file)
                throw new firebaseAdapter_interface_1.SkyotException({ message: "File is mandatory" });
            const name = `${Date.now()}.${file.mimetype.split("/").pop()}`;
            const uploadPath = process.env.NODE_ENV == "production" ? "prod" : "dev";
            const path = `${uploadPath}/${this.path}/${name}`;
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
                stream.on("finish", () => __awaiter(this, void 0, void 0, function* () {
                    yield firebaseFile.makePublic();
                    (0, __1.logger)(`finish ${path}`);
                    resolve({ url });
                }));
                stream.end(file.buffer);
            });
        });
    }
    delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!url)
                throw new firebaseAdapter_interface_1.SkyotException({ message: "url is mandatory" });
            const replaceHttp = (value) => value.replace(`https://storage.googleapis.com/${this.firebaseConfig.storageUrl}/`, "");
            return yield this.firebaseConfig.bucket
                .file(replaceHttp(url))
                .delete()
                .catch((e) => (0, __1.logger)(e));
        });
    }
}
exports.SkyotFirebase = SkyotFirebase;
//# sourceMappingURL=index.js.map