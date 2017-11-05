import './Lightbox.css'
import { toggleActiveItem } from '../reducers'
import store from '../store'

const Div = className => {
    const el = document.createElement('div')
    el.className = className
    return el
}
const Image = ({ name, contentUrl }) => {
    const imageContainer = Div('image-container')
    imageContainer.innerHTML = `
        <img class="image" src=${contentUrl} alt=${name}/>
        <h3 class="image-container__title">${name}</h3>
    `
    return imageContainer
}
const Close = () => {
    const close = Div('close')
    close.innerHTML = '<i class="fa fa-times-circle fa-2x" aria-hidden="true"></i>'
    close.onclick = () => store.dispatch(toggleActiveItem(null))
    return close
}
const Arrow = (direction, id) => {
    const arrow = Div(`arrow arrow--${direction}`)
    arrow.innerHTML = `<i class="fa fa-angle-${direction} fa-2x" aria-hidden="true"></i>`
    arrow.onclick = () => store.dispatch(toggleActiveItem(id))
    return arrow
}

const Overlay = () => {
    const overlay = Div('overlay overlay--active')
    overlay.onclick = () => store.dispatch(toggleActiveItem(null))
    return overlay
}
export const Lightbox = (el, activeImage, previousItem, nextItem) => {
    el.innerHTML = ''
    if (!activeImage) {
        return
    }
    const lightbox = Div('lightbox')
    const container = Div('container')

    previousItem && container.appendChild(Arrow('left', previousItem))
    container.appendChild(Image(activeImage))
    nextItem && container.appendChild(Arrow('right', nextItem))
    container.appendChild(Close())

    lightbox.appendChild(container)
    lightbox.appendChild(Overlay())
    el.appendChild(lightbox)
}

store.subscribe(() => {
    const { activeItem, images } = store.getState()
    const imageIds = Object.keys(images)
    const activeItemIndex = imageIds.indexOf(activeItem)
    const previousItem = imageIds[activeItemIndex - 1]
    const nextItem = imageIds[activeItemIndex + 1]

    Lightbox(document.getElementById('lightbox'), images[activeItem], previousItem, nextItem)
})
