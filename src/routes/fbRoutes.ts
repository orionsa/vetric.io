import express from 'express';

import { getHeaderData } from 'controllers/fbController.js';
const router = express.Router();

router.get('/:id',getHeaderData);

export default router;
