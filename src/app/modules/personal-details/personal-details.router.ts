import express from 'express';
import { personalDetailsController } from './personal-details.controller';
import auth from '../../middlewares/auth';
import { Role } from '@prisma/client';


const router = express.Router();

router.post(
  '/',
  auth(Role.USER),
  personalDetailsController.createPersonalDetails
);
router.get(
    '/',
    auth(Role.ADMIN),
    personalDetailsController.getAllPersonalDetails,
);
router.delete(
    '/:id',
    auth(Role.ADMIN),
    personalDetailsController.deletePersonalDetails,
);




export const personalDetailsRouter = router;
