import jwt from "jsonwebtoken";
import { User } from '../models/index.js';

export const authController = {
  async register(req, res, next) {
    try {
      const body = req.body;
      if (!body.email || !body.password || !body.username) {
        throw new Error('USername, Email and password are required');
      }
      const user = new User(body);
      await user.save();

    
  
      res.status(201).json(user);
    } catch (error) {
      if (error.code === 11000) {
        error.message = 'User already exists';
        error.code = 400;
        res.status(400).json(error);
        return;
      }
      next(error);
    }
  },
  async login(req, res, next) {
    try {
      const body = req.body;

      if (!body.username || !body.password) {
        throw new Error('Username and password are required');
      }

      const user = await User.findOne({
        username: body.username,
      });

      if (!user) {
        throw new Error('User not found');
      }

      const isMatch = await user.matchPassword(body.password);

      if (!isMatch) {
        throw new Error('Invalid credentials');
      }

      res.send(user);
    } catch (error) {
      next(error);
    }
  },

async profile  (req, res) {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
},

  async logout(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  },
};