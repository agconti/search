import './index.css'
import './colors.css'
import './easings.css'
import './z-index.css'
import * as App from './App'
import { dispatch } from './store'
const render = (el, renderFunction) => (el.innerHTML = renderFunction())
render(document.getElementById('root'), App.render)

// getImages = () => dispatch =>
//     Promise.resolve(dispatch(isFetching(true)))
//         .then(apiResustToImages)
//         .then(images => dispatch(addImages(images)))
//         .then(() => dispatch(isFetching(false)))

// dispatch(getImages())
