import './Grid.css'
import data from '../data'

const sources = [
    'https://media.giphy.com/media/lAK7ACXBaEy4/giphy.gif',
    'https://media.giphy.com/media/26FmPzA1QuRAIrkkM/giphy.gif',
    'https://media.giphy.com/media/xT9IgmVz0jdY4lt4Dm/giphy.gif',
]

const Image = ({ name, thumbnailUrl }) => `
    <div class="grid__item">
        <img class="image" src="${thumbnailUrl}" alt="${name}" />
    </div>
`
export const Grid = () => `
    <section class="grid">
        ${data.value.map(image => Image(image)).join('')}
    </section>
`
