import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import todoApp from './reducers'
import rootSaga from './sagas'

export default function configureStore(preloadedState) {
    const sagaMiddleware = createSagaMiddleware()

    // TODO remove thunkMiddleware
    const middlewares = [loggerMiddleware, thunkMiddleware, sagaMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(todoApp, preloadedState, composedEnhancers)

    sagaMiddleware.run(rootSaga)

    if(process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducers')
    }

    return store
}