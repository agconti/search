import { API_KEY } from './config'
import * as actions from './reducers'
import data from './data'

const resource = 'https://api.cognitive.microsoft.com/bing/v7.0/images'
const mode = 'cors'
const headers = new Headers({
    Accept: 'application/json',
    'Ocp-Apim-Subscription-Key': API_KEY,
})

const checkStatus = response => {
    const { status, statusText } = response

    if (status >= 200 && status < 300) {
        return response
    }

    const error = new Error(statusText)
    error.response = response
    throw error
}

const request = url =>
    fetch(url, { headers, mode, method: 'GET' })
        .then(checkStatus)
        .then(res => res.json())

export const search = query =>
    request(`${resource}/search?q=${query}&size=large&count=32&color=blue`).then(data => data.value)

export const getImages = query => dispatch =>
    Promise.resolve(dispatch(actions.isFetching(true)))
        .then(() => actions.resetImages())
        .then(() => search(query))
        .then(images => dispatch(actions.addImages(images)))
        .then(() => dispatch(actions.isFetching(false)))
