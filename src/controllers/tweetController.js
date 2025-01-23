import { createTweets as createTweetsServices } from "../services/tweetSevices.js";

export const getTweets = (req, res) => {
    return res.json({
        tweets: [
            { id: 1, content: "Hello World" },
            { id: 2, content: "This is a tweet" },
        ],
    });
};

export const getTweetById = (req, res) => {
    const { id } = req.params;

    return res.json({
        tweet: { id: parseInt(id), content: `Tweet with ID: ${id}` },
    });
};

export const createTweets = async(req, res) => {
    try {
        const response = await createTweetsServices({
            body: req.body,
        });
        console.log("reponse", response);
        return res.status(201).json({
            message: "Tweet created successfully",
            success: true,
            data: response,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: error.message,
        });
    }
};