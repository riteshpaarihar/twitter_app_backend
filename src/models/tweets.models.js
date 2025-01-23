import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
    body: {
        type: String,
        required: true,
        maxlength: 140,
        trim: true,
    }
})

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;