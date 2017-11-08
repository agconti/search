import './SearchBar.css'
import { getImages } from '../api'
import store from '../store'

const shouldUpdate = el => !el.hasChildNodes()

export const SearchBar = el => {
    let input
    if (!shouldUpdate(el)) {
        return
    }

    const form = document.createElement('form')
    form.onsubmit = () => {
        const query = input.value
        store.dispatch(getImages('climbing'))
        return false
    }
    form.innerHTML = `
        <input type="text" placeholder="climbing"/>
        <button><i class="fa fa-search" aria-hidden="true"></i></button>
    `
    input = form.querySelector('input')
    el.appendChild(form)
}

store.subscribe(() => SearchBar(document.querySelector('.searchbar')))
