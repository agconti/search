import './Loader.css'
import store from '../store'

let prevIsFetching
export const Loader = (el, isFetching) => {
    if (isFetching === prevIsFetching) {
        return
    }
    if (!isFetching) {
        el.innerHTML = ''
        return
    }
    el.innerHTML = `
        <div class="loader">
            <div class="loader__container">
                <div class="loader__bar"></div>
            </div>
        </div>
    `
    return el
}

store.subscribe(() => Loader(document.getElementById('loader'), store.getState().isFetching))
