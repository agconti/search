import { rootReducer } from './reducers'

class Store {
    constructor(reducer) {
        this.state = undefined
        this.listeners = []
        this.reducer = reducer
        this.dispatch = this.dispatch.bind(this)
        this.getState = this.getState.bind(this)
        this.populateInitalStateTree()
    }
    populateInitalStateTree() {
        return this.dispatch({ type: `@@INIT` })
    }
    getState() {
        return { ...this.state }
    }
    dispatch(action) {
        const { state, listeners, reducer } = this

        // if the action is asychronous, ( a function ), recurse until
        // we can apply the action to our reducers
        if (typeof action === 'function') {
            return action(this.dispatch, this.getState)
        }

        this.state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    subscribe(listener) {
        this.listeners.push(listener)
    }
}

const store = new Store(rootReducer)
export default store
