"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkyotMongoDB = void 0;
const SkyotException_1 = require("../utils/SkyotException");
class SkyotMongoDB {
    constructor(mongoose) {
        this.mongoose = mongoose;
    }
    getAll() {
        try {
            return this.mongoose.find();
        }
        catch (error) {
            throw new SkyotException_1.SkyotException(error.message);
        }
    }
    async getOne(obj) {
        try {
            return this.mongoose.findOne(obj);
        }
        catch (error) {
            throw new SkyotException_1.SkyotException(error.message);
        }
    }
    async save(obj) {
        try {
            return await new this.mongoose(obj).save();
        }
        catch (error) {
            throw new SkyotException_1.SkyotException(error.message);
        }
    }
    async update(id, obj) {
        try {
            await this.mongoose.updateOne({ _id: id }, obj);
            return this.mongoose.findById(id);
        }
        catch (error) {
            throw new SkyotException_1.SkyotException(error.message);
        }
    }
    async delete(id) {
        try {
            return this.mongoose.deleteOne({ _id: id });
        }
        catch (error) {
            throw new Error("Error! " + error.message);
        }
    }
}
exports.SkyotMongoDB = SkyotMongoDB;
//# sourceMappingURL=SkyotMongoDB.js.map