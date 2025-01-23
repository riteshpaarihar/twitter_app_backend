import express from 'express';
import v1Route from './v1/v1Routes.js';
import v2Route from './v2/v2Routes.js';

const router = express.Router();

router.use('/v1', v1Route);
router.use('/v2', v2Route);

export default router;