export function reducers(state, action) {
    switch (action.type) {
        case 'SET_MAP_DATA':
            return{...state, mapData: action.payload}
        default:
            return state
    }
}
