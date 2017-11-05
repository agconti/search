import './index.css'
import './colors.css'
import './easings.css'
import './z-index.css'
import App from './App'
import store from './store'
import { getImages } from './api'

const render = (el, renderFunction) => (el.innerHTML = renderFunction())
render(document.getElementById('root'), App)

store.dispatch(getImages('climbing'))
