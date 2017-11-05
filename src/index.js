import './index.css'
import './colors.css'
import './easings.css'
import './z-index.css'
import App from './App'
import { Lightbox } from './Lightbox'
import { Grid } from './Grid'
import { Loader } from './Loader'
import store from './store'
import { getImages } from './api'

document.getElementById('root').innerHTML = App()
store.dispatch(getImages('climbing'))
