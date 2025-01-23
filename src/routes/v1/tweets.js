import express from 'express';
import { createTweets, getTweetById, getTweets } from '../../controllers/tweetController.js';
import { validator } from '../../validators/tweeteZodValidator.js';
import { tweetZodSchema } from '../../validators/zodSchema.js';
//import { tweetMunualValidator } from '../../validators/tweetMunualValidator.js';
const router = express.Router();


router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', validator(tweetZodSchema), createTweets);

export default router;