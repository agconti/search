import './App.css'
import store from './store'

const App = () => `
    <section class="app">
        <div id="loader"></div>
        <div id="lightbox"></div>
        <header class="header">
          <h1 class="title">Simple Search App</h1>
        </header>
        <section class="grid"></section>
    </section>
`

store.subscribe(() => {
    const rootEl = document.getElementById('root')

    if (store.getState().activeItem) {
        rootEl.style.position = 'fixed'
        return
    }
    rootEl.style.position = 'initial'
})

export default App
