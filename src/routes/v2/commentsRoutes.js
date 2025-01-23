import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        message: 'Hello from User Route v2'
    });
});

router.get('/:id', (req, res) => {
    res.send({
        message: `V2 Hello from User Route with ID: ${req.params.id}`
    });
});

export default router;