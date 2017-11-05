import './App.css'
import { Grid } from './Grid'
import { Lightbox } from './Lightbox'

const App = () => `
    <section class="app">
        ${Lightbox()}
        <header class="header">
          <h1 class="title">Simple Search App</h1>
        </header>
        ${Grid()}
    </section>
`

export default App
