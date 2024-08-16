import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const {} = req.params;
  const {} = req.body;

  try {
    res.json({ data: `Method: ${req.method}`, body: req.body, params: req.params });
  } catch (error) {
    console.log(error);
  }
});
export default router;
