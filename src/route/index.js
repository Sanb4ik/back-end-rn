import Router from 'express';
import AuthController from '../auth/auth.controller.js';
import UserController from '../user/user.controller.js';

const router = new Router();

router.post('/auth/signup', AuthController.signup);
router.post('/auth/signin', AuthController.login);

router.get('/user/:id', UserController.getUser);
router.put('/user/:id', UserController.updateUser);

export default router;