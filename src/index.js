import './index.css'
import './colors.css'
import './easings.css'
import './z-index.css'
import App from './App'
import { Lightbox } from './Lightbox'
import { Grid } from './Grid'
import store from './store'
import { getImages } from './api'

const Search = () => {
    const searchContainer = document.createElement('div')
    searchContainer.className = 'search'
    searchContainer.innerHTML = `
        <form action="">
        <h1>Simple Search</h1>
        <input type="text"/>
        <buttom type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
    `
    const input = searchContainer.querySelector('input')
    input.onsubmit = () => alert(input.value)
    return searchContainer
}
const render = (el, renderFunction) => () => (el.innerHTML = renderFunction())
render(document.getElementById('root'), App)()
document.getElementById('search').appendChild(Search())

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
    console.log(`running grid render`)
    const grid = document.querySelector('.grid')
    const { images } = store.getState()
    const gridImages = Object.keys(images).map(id => images[id])
    Grid(grid, gridImages)
})
store.dispatch(getImages('bears'))
