import fetch from 'cross-fetch'
let nextTodoId = 0

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
})

export const invalidateSubreddit = subreddit => ({
    type: INVALIDATE_SUBREDDIT,
    subreddit
})

export const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
})

export const shouldFetchPosts = (state, subreddit) => {
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

export const fetchPostsIfNeeded = subreddit => (
    (dispatch, getState) => {
        if(shouldFetchPosts(getState(), subreddit)) {
            return dispatch({ type: 'GET_POSTS', payload: { subreddit } })
        }
        else {
            return Promise.resolve()
        }
    }
)