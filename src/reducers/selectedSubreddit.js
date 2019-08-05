import { SELECT_SUBREDDIT } from '../actions'

const selectedSubreddit = (state = 'reactjs', action) => {
    switch(action.type) {
        case SELECT_SUBREDDIT:
            return action.payload.subreddit
        default:
            return state
    }
}

export default selectedSubreddit