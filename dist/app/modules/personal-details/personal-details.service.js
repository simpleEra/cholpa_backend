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
exports.personalDetailsService = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const pagination_1 = __importDefault(require("../../utils/pagination"));
const createPersonalDetails = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.personalDetails.create({
        data: payload,
    });
    return result;
});
const getAllPersonalDetails = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, page, skip, sort, order } = (0, pagination_1.default)(options);
    const result = yield prisma_1.default.personalDetails.findMany({
        where: {},
        skip,
        take: limit,
    });
    const total = yield prisma_1.default.personalDetails.count({
        where: {},
    });
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const deletePersonalDetails = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield prisma_1.default.personalDetails.delete({
        where: {
            id: id
        }
    });
    return reuslt;
});
exports.personalDetailsService = {
    createPersonalDetails,
    getAllPersonalDetails,
    deletePersonalDetails
};
