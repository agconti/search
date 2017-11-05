import './index.css'
import './colors.css'
import './easings.css'
import './z-index.css'
import App from './App'
import { Lightbox } from './Lightbox'
import { Grid } from './Grid'
import store from './store'
import { getImages } from './api'

const render = (el, renderFunction) => () => (el.innerHTML = renderFunction())
render(document.getElementById('root'), App)()

store.subscribe(() => {
    if (store.getState().activeItem) {
        document.getElementById('root').style.position = 'fixed'
        return
    }
    document.getElementById('root').style.position = 'initial'
})
store.subscribe(
    render(document.getElementById('lightbox'), () => {
        const { activeItem, images } = store.getState()
        return Lightbox(images[activeItem])
    }),
)
store.subscribe(() => {
    console.log(`running grid render`)
    const grid = document.querySelector('.grid')
    const { images } = store.getState()
    const gridImages = Object.keys(images).map(id => images[id])
    Grid(grid, gridImages)
})
store.dispatch(getImages('bears'))
