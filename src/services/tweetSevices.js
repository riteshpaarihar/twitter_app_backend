import { Filter } from 'bad-words'
import { createTweet as createTweetsRepository } from '../repositories/tweetRepository.js'
export const createTweets = async({ body }) => {
    console.log(body);
    const filter = new Filter()

    if (filter.isProfane(body)) {

        console.log(body);
        console.log(filter.clean(body));
        throw new Error('Profanity detected in the tweet')
            // log or handle the profane content

    }
    const tweet = createTweetsRepository({ body });
    return tweet;

}