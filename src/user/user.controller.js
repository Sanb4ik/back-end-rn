import UserService from './user.service.js';

class UserController {
  async getUser(req, res) {
    const id = req.params.id;
    await UserService.getUser(id, res);
  }

  async updateUser(req, res) {
    const id = req.params.id;
    await UserService.updateUser(id, req.body, res);
  }
}

export default new UserController();
