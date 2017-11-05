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

const render = (el, renderFunction) => () => (el.innerHTML = renderFunction())
render(document.getElementById('root'), App)()

store.subscribe(() => Loader(document.getElementById('loader'), store.getState().isFetching))

store.subscribe(() => {
    if (store.getState().activeItem) {
        document.getElementById('root').style.position = 'fixed'
        return
    }
    document.getElementById('root').style.position = 'initial'
})

store.subscribe(() => {
    const { activeItem, images } = store.getState()
    const imageIds = Object.keys(images)
    const activeItemIndex = imageIds.indexOf(activeItem)
    const previousItem = imageIds[activeItemIndex - 1]
    const nextItem = imageIds[activeItemIndex + 1]

    Lightbox(document.getElementById('lightbox'), images[activeItem], previousItem, nextItem)
})

store.subscribe(() => {
    const grid = document.querySelector('.grid')
    const { images } = store.getState()
    const gridImages = Object.keys(images).map(id => images[id])
    Grid(grid, gridImages)
})
store.dispatch(getImages('bears'))
