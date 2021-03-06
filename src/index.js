'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"]')
)

if (module.hot) module.hot.accept()
