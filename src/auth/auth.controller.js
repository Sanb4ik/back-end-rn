import AuthService from './auth.service.js';

class AuthController {
  async signup(req, res) {
    await AuthService.signup(req.body, res);
  }

  async login(req, res) {
    const { email, password } = req.body;
    await AuthService.signin(email, password, res);
  }
}

export default new AuthController();
