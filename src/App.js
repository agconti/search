import './App.css'
import { SearchBar } from './SearchBar'
import store from './store'

const App = () => `
    <section class="app">
        <div id="loader"></div>
        <div id="lightbox"></div>
        <header class="header">
          <h1 class="title">Simple Search App</h1>
          <div class="searchbar"></div>
        </header>
        <section class="grid"></section>
    </section>
`

export default App

store.subscribe(() => {
    const rootElement = document.getElementById('root')

    if (store.getState().activeItem) {
        rootElement.style.position = 'fixed'
        return
    }
    rootElement.style.position = 'initial'
})
