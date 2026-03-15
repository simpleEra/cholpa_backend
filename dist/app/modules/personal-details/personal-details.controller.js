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
exports.personalDetailsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const PickFunction_1 = __importDefault(require("../../utils/PickFunction"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const Recipe_constant_1 = require("../Recipe/Recipe.constant");
const personal_details_service_1 = require("./personal-details.service");
const createPersonalDetails = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield personal_details_service_1.personalDetailsService.createPersonalDetails(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "send personal details successfully",
        data: result
    });
}));
const getAllPersonalDetails = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = (0, PickFunction_1.default)(req.query, Recipe_constant_1.paginationFields);
    const result = yield personal_details_service_1.personalDetailsService.getAllPersonalDetails(options);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "get all personal details successfully",
        data: result.data,
        meta: result.meta,
    });
}));
const deletePersonalDetails = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const params = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id;
    const result = yield personal_details_service_1.personalDetailsService.deletePersonalDetails(params);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "get all personal details successfully",
        data: result
    });
}));
exports.personalDetailsController = {
    createPersonalDetails,
    getAllPersonalDetails,
    deletePersonalDetails
};
