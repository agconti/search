export const createReducer = (initialState, handlers) => (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
        return handlers[action.type](state, action)
    }

    return state
}

const IS_FETCHING = 'IS_FETCHING'
const TOGGLE_ACTIVE_ITEM = 'TOGGLE_ACTIVE_ITEM'
const RESET_ACTIVE_ITEM = 'RESET_ACTIVE_ITEM'
const ADD_IMAGE = 'ADD_IMAGE'
const REMOVE_IMAGE = 'REMOVE_IMAGE'
const ADD_IMAGES = 'ADD_IMAGES'
const RESET_IMAGES = 'RESET_IMAGES'

const isFetching = () => ({ type: IS_FETCHING, isFetching})
const toggleActiveItem = id => ({ type: TOGGLE_ACTIVE_ITEM, id})
const addImage = image => ({ type: ADD_IMAGE, image})
const addImages = images => ({ type: ADD_IMAGES, images})
const resetImages = () => ({ type: RESET_IMAGES})

const defaultRootReducerState = {}
const defaultIsFetchingState = false
const defaultActiveItemState = ''
const defaultImagesState = {}
const defaultImagesState = {}

export const activeItem = createReducer(defaultActiveItemState, {
    [TOGGLE_ACTIVE_ITEM](state, { id }) {
        if (state === id) {
            return defaultActiveItemState
        }
        return id
    },
    [RESET_ACTIVE_ITEM]: () => defaultActiveItemState,
})

export const image = createReducer(defaultImageState, {
    [ADD_IMAGE]: (state, { image }) => ({...state, [String(image.id)]: {...image }}),
}

export const images = createReducer(defaultImagesState, {
    [ADD_IMAGE]: image,
    [ADD_IMAGES](state, { images }) {
        return images.reduce((acc, item) => image(acc, addImage(item)), { ...state })
    },
    [RESET_IMAGES]: () => defaultImagesState
}

const rootReducer = createReducer(defaultRootReducerState, {
    [IS_FETCHING]: (state=defaultIsFetchingState, { isFetching }) => ({ ...state, isFetching }),
})
