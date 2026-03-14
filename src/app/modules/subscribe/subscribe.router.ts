import { Router } from 'express';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';
import { SubscribeController } from './subscribe.controller';

const router = Router();

router.post('/', auth(Role.ADMIN,Role.USER), SubscribeController.addedNewSubscribe);
router.get('/', auth(Role.ADMIN), SubscribeController.getAllSubscribe);



export const subscribeRouter = router;
