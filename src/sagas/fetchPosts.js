import { call, put, select, takeEvery } from 'redux-saga/effects'

import { fetchPostsApi } from '../api'

const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit]
    if(!posts) {
        return true
    }
    else if(posts.isFetching) {
        return false
    }
    else {
        return posts.didInvalidate
    }
}

function* fetchPosts(action) {
    const subreddit = action.payload.subreddit

    const state = yield select();

    if(!shouldFetchPosts(state, subreddit)) {
        return Promise.resolve()
    }

    const json = yield call(fetchPostsApi, subreddit)

    yield put({ 
        type: 'RECEIVE_POSTS',
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    })
}

export default function* watchFetchPosts() {
    yield takeEvery('GET_POSTS', fetchPosts)
}