import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './configureStore'

const store = configureStore()

const RenderApp = () =>
    (
        <Provider store={store}>
            <App />
        </Provider>
    )


if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./components/App', RenderApp)
}

const wrapper = document.getElementById("todo-list")
wrapper ? render(<RenderApp />, wrapper) : false