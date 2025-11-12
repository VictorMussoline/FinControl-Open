import express from 'express';
const router = express.Router();

// GET /accounts
router.get('/', async (req, res) => {
  // recuperar contas do DB (placeholder)
  res.json([]);
});

// POST /accounts
router.post('/', async (req, res) => {
  const { name, initialBalance, type } = req.body;
  // salvar no DB
  res.status(201).json({ id: 'abc123', name, initialBalance, type });
});

// DELETE /accounts/:id
router.delete('/:id', async (req, res) => {
  // remover do DB
  res.status(204).send();
});

export default router;

