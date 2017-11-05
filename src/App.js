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

export default App

store.subscribe(() => {
    if (store.getState().activeItem) {
        document.getElementById('root').style.position = 'fixed'
        return
    }
    document.getElementById('root').style.position = 'initial'
})
