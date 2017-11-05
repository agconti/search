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

export const isFetching = isFetching => ({ type: IS_FETCHING, isFetching })
export const toggleActiveItem = id => ({ type: TOGGLE_ACTIVE_ITEM, id })
export const addImage = image => ({ type: ADD_IMAGE, image })
export const addImages = images => ({ type: ADD_IMAGES, images })
export const resetImages = () => ({ type: RESET_IMAGES })

const defaultRootReducerState = {}
const defaultIsFetchingState = false
const defaultActiveItemState = ''
const defaultImageState = {}
const defaultImagesState = {}

const isFetchingReducer = createReducer(defaultIsFetchingState, {
    [IS_FETCHING]: (state, { isFetching = defaultIsFetchingState }) => isFetching,
})

const activeItem = createReducer(defaultActiveItemState, {
    [TOGGLE_ACTIVE_ITEM](state, { id }) {
        if (state === id) {
            return defaultActiveItemState
        }
        return id
    },
    [RESET_ACTIVE_ITEM]: () => defaultActiveItemState,
})

const image = createReducer(defaultImageState, {
    [ADD_IMAGE]: (state, { image }) => ({ ...state, [String(image.imageId)]: { ...image } }),
})

const images = createReducer(defaultImagesState, {
    [ADD_IMAGE]: image,
    [ADD_IMAGES](state, { images }) {
        return images.reduce((acc, item) => image(acc, addImage(item)), { ...state })
    },
    [ADD_IMAGES](state, { images }) {
        return images.reduce((acc, item) => image(acc, addImage(item)), { ...state })
    },
    [RESET_IMAGES]: () => defaultImagesState,
})

export const rootReducer = (state = defaultRootReducerState, action) => ({
    isFetching: isFetchingReducer(state.isFetching, action),
    activeItem: activeItem(state.activeItem, action),
    images: images(state.images, action),
})
