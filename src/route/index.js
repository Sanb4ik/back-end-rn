import Router from 'express';
import AuthController from '../auth/auth.controller.js';
import UserController from '../user/user.controller.js';

const router = new Router();

router.post('/auth/signup', AuthController.signup);
router.post('/auth/signin', AuthController.login);

router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUser);
router.put('/users/:id', UserController.updateUser);

export default router;