import express from 'express';
import tweeteRouter from './tweets.js';
import commentRouter from './commentsRoutes.js';

const router = express.Router();


router.use('/tweets', tweeteRouter);
router.use('/comments', commentRouter);



export default router;