import express from 'express';
import { PORT } from './config/serviesConfig.js';
import apiRouter from './routes/apiRoutes.js'
import connectDb from './config/dbConfig.js';

const app = express();
console.log(PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.all('*', (req, res) => {
    return res.status(404).json({
        massage: "page not fond"
    })
})

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT} `);
    connectDb();
})