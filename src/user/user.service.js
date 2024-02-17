import User from '../models/user.js';

class UserService {
  async getUser(id, res) {
    const user = await User.findById(id);
    res.json(user);
  }

  async updateUser(id, data, res) {
    const user = await User.findByIdAndUpdate(id, data, { new: true });
    res.json(user);
  }
}

export default new UserService();