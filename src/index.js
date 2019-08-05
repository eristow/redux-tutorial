import 'core-js/stable'
import 'regenerator-runtime/runtime'
import _ from 'lodash'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppContainer from './containers/AppContainer'
import AsyncContainer from './containers/AsyncContainer'

const RenderApp = () =>
    (
        <Router>
            <Route path="/" component={AsyncContainer} />
            <Route path="/todo/:filter?" component={AppContainer} />
        </Router>
    )


if(process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./components/App', RenderApp)
}

const wrapper = document.getElementById("app-container")
wrapper ? render(<RenderApp />, wrapper) : false