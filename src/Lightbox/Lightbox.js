import './Lightbox.css'
import { toggleActiveItem } from '../reducers'
import store from '../store'

const Div = className => {
    const el = document.createElement('div')
    el.className = className
    return el
}
const Image = ({ name, contentUrl }) => {
    const img = document.createElement('img')
    img.className = 'image'
    img.src = contentUrl
    img.alt = name
    return img
}
const Arrow = (direction, id) => {
    const arrow = Div(`arrow arrow--${direction}`)
    arrow.innerHTML = `<i class="fa fa-angle-${direction} fa-2x" aria-hidden="true"></i>`
    arrow.onclick = () => store.dispatch(toggleActiveItem(id))
    return arrow
}

const Overlay = () => {
    const overlay = Div('overlay')
    overlay.onclick = () => store.dispatch(toggleActiveItem(null))
    return overlay
}
export const Lightbox = (el, activeImage, previousItem, nextItem) => {
    if (!activeImage) {
        el.innerHTML = ''
        return
    }
    const lightbox = Div('lightbox')
    const container = Div('container')

    previousItem && container.appendChild(Arrow('left', previousItem))
    container.appendChild(Image(activeImage))
    nextItem && container.appendChild(Arrow('right', nextItem))

    lightbox.appendChild(container)
    lightbox.appendChild(Overlay())
    el.appendChild(lightbox)
}
