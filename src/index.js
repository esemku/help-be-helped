import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import { Provider } from 'react-redux'
import store from './redux/store'
// import './sass/style.react.scss'
import './index.scss'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
