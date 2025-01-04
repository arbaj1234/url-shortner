import { Router } from 'express';
import { shortenUrl, redirectUrl } from '../controller/urlController.js';
const router = Router();
router.post('/shorten', shortenUrl);
router.get('/:shortId', redirectUrl);
export default router;
