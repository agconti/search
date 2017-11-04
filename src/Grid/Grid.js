import './Grid.css'
const sources = [
    'https://media.giphy.com/media/lAK7ACXBaEy4/giphy.gif',
    'https://media.giphy.com/media/26FmPzA1QuRAIrkkM/giphy.gif',
    'https://media.giphy.com/media/xT9IgmVz0jdY4lt4Dm/giphy.gif',
]
const Image = src => `<img class="grid__image" src=${src} /> `
export const Grid = () => `
    <section class="grid">
    ${sources.map(source => Image(source)).join('')}
    </section>
`
