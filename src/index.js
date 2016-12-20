import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/main.scss'
import configureStore from './store/configureStore'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState())
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.react-view')
);
