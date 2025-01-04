import { Router } from 'express';
import { shortenUrl,redirectUrl } from '../controller/urlController';

const router = Router();



router.post('/shorten', shortenUrl);
router.get('/:shortId', redirectUrl)



export default router;
