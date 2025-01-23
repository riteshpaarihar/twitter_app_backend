import mongoose from 'mongoose';
import { MONGOOSE_URL } from './serviesConfig.js';
// console.log(MONGOOSE_URL);
export default async function connectDb() {
    try {
        await mongoose.connect(MONGOOSE_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        process.exit(1);
    }
}