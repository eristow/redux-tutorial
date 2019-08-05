import fetch from 'cross-fetch'

export const fetchPostsApi = async subreddit => {
    // const response1 = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    // const json1 = await response1.json()
    // console.log('api test json', json1)

    const response = await fetch(`http://127.0.0.1:5000/api/v1/subreddit`, {
        method: 'post',
        body: JSON.stringify(subreddit)
    })

    console.log('api response', response)

    const json = await response.json()

    console.log('api json', json)

    return json
}