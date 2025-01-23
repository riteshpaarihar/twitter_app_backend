export const getTweets = (req, res) => {

    return res.json({
        tweets: [
            { id: 1, content: 'Hello World' },
            { id: 2, content: 'This is a tweet' },
        ]
    })
}



export const getTweetById = (req, res) => {
    const { id } = req.params;

    return res.json({
        tweet: { id: parseInt(id), content: `Tweet with ID: ${id}` }
    })
}


export const createTweets = (req, res) => {
    const { content } = req.body;

    return res.json({
        tweet: { id: Date.now(), content }
    })
}