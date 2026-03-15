"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeRouter = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const subscribe_controller_1 = require("./subscribe.controller");
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(client_1.Role.ADMIN, client_1.Role.USER), subscribe_controller_1.SubscribeController.addedNewSubscribe);
router.get('/', (0, auth_1.default)(client_1.Role.ADMIN), subscribe_controller_1.SubscribeController.getAllSubscribe);
exports.subscribeRouter = router;
