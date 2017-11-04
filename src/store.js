const reducer = (state, action) => state

class Store {
    constructor(reducer) {
        this.state = null
        this.listeners = []
        this.reducer = reducer
    }
    getState() {
        return { ...this.state }
    }
    dispatch(action) {
        const { state, listeners, reducer } = this
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    subscribe(listener) {
        this.listeners.push(listener)
    }
}

const store = new Store(reducer)
export default store
