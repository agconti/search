import './index.css'
import * as App from './App'

const render = (el, renderFunction) => (el.innerHTML = renderFunction())
render(document.getElementById('root'), App.render)
