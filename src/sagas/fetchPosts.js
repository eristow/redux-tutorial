import { call, put, takeEvery } from 'redux-saga/effects'

import { fetchPostsApi } from '../api'

//TODO when does this get called in the flow of redux/saga?
function* fetchPosts(action) {
    const subreddit = action.payload.subreddit

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