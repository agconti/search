import './index.css'
import './colors.css'
import './easings.css'
import './z-index.css'
import * as App from './app'
import store from './store'

const render = (el, renderFunction) => (el.innerHTML = renderFunction())
render(document.getElementById('root'), App.render)
