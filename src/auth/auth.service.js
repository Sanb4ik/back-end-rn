import User from '../models/user.js';

class AuthService {
  async signup(data, res) {
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = new User(data);
      await newUser.save();
      res.status(201).json();
    } else {
      res.status(400).json({ message: 'User already exists' });
    }
  }

  async signin(email, password, res) {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json(user);
    } else {
      res.status(400).json({ message: 'User not found' });
    }
  }
}

export default new AuthService();
