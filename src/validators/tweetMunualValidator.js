export const tweetMunualValidator = (req, res, next) => {
    if (!req.body.content) {
        return res.status(400).json({ message: 'Text should be at least 10 characters long' });
    }
    next();
}