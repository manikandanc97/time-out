import 'dotenv/config';
import express from 'express';
import prisma from './prismaClient.js';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import { authMiddleware } from './middleware/authMiddleware.js';

import leaveRoutes from './routes/leaveRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

app.use('/api/auth', authRoutes);

app.get('/api/profile', authMiddleware, async (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user.userId });
});

app.use('/api/leaves', leaveRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
