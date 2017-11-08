import './index.css'
import './colors.css'
import './easings.css'
import './z-index.css'
import './Grid'
import './Lightbox'
import './Loader'
import App from './App'
import store from './store'
import { getImages } from './api'

document.getElementById('root').innerHTML = App()
store.dispatch(getImages('bears'))
