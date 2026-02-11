import 'dotenv/config';
import express from 'express';
import prisma from './prismaClient.js';

const app = express();
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

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
