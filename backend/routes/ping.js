import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ pong: true, time: new Date().toISOString() });
});

export default router;

