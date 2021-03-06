import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStoreAsync'
import AsyncApp from './AsyncApp'

const store = configureStore()

export default class AsyncContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        )
    }
}