import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './state/store'

const RootHTML = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<RootHTML />, document.getElementById('root'))
serviceWorker.unregister()
