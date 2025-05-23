import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import { body } from 'express-validator';
import * as authMiddleware from '../middleware/auth.middleware.js';

const router = Router();
router.post('/register',
    body('email').isEmail().withMessage('Email must be at least 6 characters long'),
    body('password').isLength({ min: 3 }).withMessage('Email must not be longer than 3 character'),
    userController.createUserController);

router.post('/login',
    body('email').isEmail().withMessage('Email must be at least 6 characters long'),
    body('password').isLength({ min: 3 }).withMessage('Email must not be longer than 3 character'),
    userController.loginController);

router.get('/profile', authMiddleware.authUser, userController.profileController);

router.get('/logout',authMiddleware.authUser,userController.logoutController);
export default router;
