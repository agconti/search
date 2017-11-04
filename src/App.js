import './app.css'
import './colors.css'

const sources = [
    'https://media.giphy.com/media/lAK7ACXBaEy4/giphy.gif',
    'https://media.giphy.com/media/26FmPzA1QuRAIrkkM/giphy.gif',
    'https://media.giphy.com/media/xT9IgmVz0jdY4lt4Dm/giphy.gif',
]
const Image = src => `<img class="grid__image" src=${src} /> `
const Grid = () => `
    <section class="grid">
    ${sources.map(source => Image(source)).join('')}
    </section>
`

export const render = () => {
    return `
      <section class="app">
        <header class="header">
          <h1 class="title">Simple Search App</h1>
        </header>
        ${Grid()}
    </section>`
}
