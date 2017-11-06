import './Grid.css'
import store from '../store'
import { toggleActiveItem } from '../reducers'

const GridItem = ({ imageId, name, thumbnailUrl }) => {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid__item')
    gridItem.innerHTML = `<img class="image" src="${thumbnailUrl}" alt="${name}" />`
    gridItem.onclick = () => store.dispatch(toggleActiveItem(imageId))

    return gridItem
}
export const Grid = (gridElement, images) => {
    gridElement.innerHTML = ''
    images.forEach(image => gridElement.appendChild(GridItem(image)))
}

const GridContainer = () => {
    const grid = document.querySelector('.grid')
    const { images } = store.getState()
    const gridImages = Object.keys(images).map(id => images[id])
    Grid(grid, gridImages)
}

store.subscribe(GridContainer)
