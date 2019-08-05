import fetch from 'cross-fetch'

export const fetchPostsApi = async subreddit => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`)

    return await response.json()
}