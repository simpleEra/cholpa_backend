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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeService = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const addedNewSubscribe = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload, "payload");
    const exist = yield prisma_1.default.subscribe.findUnique({
        where: { email: payload.email }
    });
    if (exist) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Email already subscribed");
    }
    return yield prisma_1.default.subscribe.create({
        data: payload
    });
});
const getAllSubscribe = () => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield prisma_1.default.subscribe.findMany({
        where: {}
    });
    return reuslt;
});
exports.SubscribeService = {
    addedNewSubscribe,
    getAllSubscribe
};
