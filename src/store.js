export default class Store {
    constructor(reducer) {
        this.state = null
        this.listeners = []
        this.reducer = reducer
        this.populateInitalStateTree()
    }
    populateInitalStateTree() {
        return this.dispatch({})
    }
    getState() {
        return { ...this.state }
    }
    dispatch(action) {
        const { state, listeners, reducer } = this

        // if the action is asychronous, ( a function ), recurse until
        // we can apply the action to our reducers
        if (action === 'function') {
            return action(this.dispatch, this.getState)
        }

        this.state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    subscribe(listener) {
        this.listeners.push(listener)
    }
}
