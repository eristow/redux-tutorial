import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import todoApp from './reducers'

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(todoApp, preloadedState, composedEnhancers)

    if(process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers')
    }

    return store
}