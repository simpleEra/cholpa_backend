"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personalDetailsRouter = void 0;
const express_1 = __importDefault(require("express"));
const personal_details_controller_1 = require("./personal-details.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = express_1.default.Router();
router.post('/', (0, auth_1.default)(client_1.Role.USER), personal_details_controller_1.personalDetailsController.createPersonalDetails);
router.get('/', (0, auth_1.default)(client_1.Role.ADMIN), personal_details_controller_1.personalDetailsController.getAllPersonalDetails);
router.delete('/:id', (0, auth_1.default)(client_1.Role.ADMIN), personal_details_controller_1.personalDetailsController.deletePersonalDetails);
exports.personalDetailsRouter = router;
