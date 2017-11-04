import './index.css'
import App from './App'

const render = (el, content) => (el.innerHTML = content)
render(document.getElementById('root'), App())
