import Tweet from '../models/tweets.models.js';


export const createTweet = async(req, res) => {
    try {
        const tweet = await Tweet.create(req.body);
        // res.status().json(tweet);
        // console.log(tweet);
        return tweet;
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




// export const getTweets = async(req, res) => {
//     try {
//         const tweets = await Tweet.find();
//         return tweets;
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// export const getTweetById = async(tweetId) => {
//     try {
//         const tweet = await Tweet.findById(tweetId);
//         if (tweet) return tweet;
//         else res.status(404).json({ message: 'Tweet not found' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// export const updateTweet = async(req, res) => {

//     try {
//         const tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (tweet) res.json(tweet);
//         else res.status(404).json({ message: 'Tweet not found' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// export const deleteTweet = async(req, res) => {
//     try {
//         const tweet = await Tweet.findByIdAndDelete(req.params.id);
//         if (tweet) res.json(tweet);
//         else res.status(404).json({ message: 'Tweet not found' });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// export const likeTweet = async (req, res) => {
// try {
// const tweet = await Tweet.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
// if (tweet) res.json(tweet);
// else res.status(404).json({ message: 'Tweet not found' });
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// };

// export const unlikeTweet = async (req, res) => {

// try {
// const tweet = await Tweet.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } }, { new: true });
// if (tweet) res.json(tweet);
// else res.status(404).json({ message: 'Tweet not found' });
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// };

// export const retweetTweet = async (req, res) => {
// try {
// const tweet = await Tweet.findByIdAndUpdate(req.params.id, { $inc: { retweets: 1 } }, { new: true });
// if (tweet) res.json(tweet);
// else res.status(404).json({ message: 'Tweet not found' });
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// };

// export const commentTweet = async (req, res) => {

// try {
// const tweet = await Tweet.findByIdAndUpdate(req.params.id, { $push: { comments: req.body } }, { new: true });
// if (tweet) res.json(tweet);
// else res.status(404).json({ message: 'Tweet not found' });
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// };

// export const deleteCommentTweet = async (req, res) => {
// try {
// const tweet = await Tweet.findByIdAndUpdate(req.params.id, { $pull: { comments: { _id: req.params.commentId } } }, { new: true });
// if (tweet) res.json(tweet);
// else res.status(404).json({ message: 'Tweet not found' });
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// };

// export const replyCommentTweet = async (req, res) => {
// try {
// const tweet = await Tweet.findByIdAndUpdate(req.params.id, { $push: { comments: { $each: [req.body], $position: 0 } } }, { new: true });
// if (tweet) res.json(tweet);
// else res.status(404).json({ message: 'Tweet not found' });
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// };

// export const deleteReplyCommentTweet = async (req, res) => {
// try {
// const tweet = await Tweet.findByIdAndUpdate(req.params.id, { $pull: { comments: { _id: req.params.commentId, replies: { _id: req.params.replyId } } } }, { new: true });
// if (tweet) res.json(tweet);
// else res.status(404).json({ message: 'Tweet not found' });
// } catch (error) {
// res.status(400).json({ message: error.message });
// }
// };