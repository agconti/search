import './Lightbox.css'

const Image = ({ name, contentUrl }) => `
        <img class="image" src="${contentUrl}" alt="${name}" />
`
const Arrow = direction => `
    <div class="arrow arrow--${direction}">
        <i class="fa fa-angle-${direction} fa-2x" aria-hidden="true"></i>
    </div>
`

export const Lightbox = activeImage => {
    if (!activeImage) return ''
    return `
    <div class="lightbox">
        <div class="container">
            ${Arrow('right')}
            ${Image(activeImage)}
            ${Arrow('left')}
        </div>
        <div class="overlay"></div>
    </div>
`
}
