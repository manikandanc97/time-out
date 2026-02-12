import express from 'express';
import { applyLeave, getLeaves } from '../controllers/leaveController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, applyLeave);
router.get('/', authMiddleware, getLeaves);

export default router;
