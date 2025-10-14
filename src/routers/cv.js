import { Router } from 'express';
import { generateCv } from '../controllers/cv.js';
import { validateBody } from '../middlewares/validateBody.js';
import { cvSchema } from '../validation/cv.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post('/generate', validateBody(cvSchema), ctrlWrapper(generateCv));

export default router;
