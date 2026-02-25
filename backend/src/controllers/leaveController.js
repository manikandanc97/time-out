import prisma from '../prismaClient.js';

export const applyLeave = async (req, res) => {
  try {
    const { type, fromDate, toDate, reason } = req.body;
    if (!type || !fromDate || !toDate || !reason) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (new Date(fromDate) > new Date(toDate)) {
      return res
        .status(400)
        .json({ error: 'From date cannot be after To date' });
    }

    const leave = await prisma.leave.create({
      data: {
        type,
        fromDate: new Date(fromDate),
        toDate: new Date(toDate),
        reason,
        userId: req.user.userId,
      },
    });

    res.status(201).json({ message: 'Leave applied successfully', leave });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getLeaves = async (req, res) => {
  try {
    const userId = req.user.userId;
    const leaves = await prisma.leave.findMany({
      where: {
        userId: userId,
      },
      orderBy: { createdAt: 'desc' },
    });
    res.json(leaves);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const updateLeaveStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!status || !['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const updated = await prisma.leave.update({
      where: { id: Number(req.params.id) },
      data: { status },
    });
    res.json({ message: 'Leave status updated', leave: updated });
    console.log('User:', req.user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
};
