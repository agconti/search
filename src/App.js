import './App.css'
import { Grid } from './Grid'

export const render = () => {
    return `
      <section class="app">
        <header class="header">
          <h1 class="title">Simple Search App</h1>
        </header>
        ${Grid()}
    </section>`
}
