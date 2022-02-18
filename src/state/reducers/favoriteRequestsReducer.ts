import { FRAction, SearchState } from "../../types/stateTypes"

const favoriteRequestReducer: (state: SearchState[], action: FRAction) => SearchState[] = (state = [], action) => {
    switch (action.type){
        case 'favorite-requests/push':
            return [...state, action.payload]
        case 'favorite-requests/set-all':
            return [...action.payload]
        case 'favorite-requests/update':
            return state.map((state, index) => index !== action.payload.index ? state : action.payload.data)
        case 'favorite-requests/remove':
            return state.filter((state, index) => index !== action.payload)
        default:
            return state    
    }
}

export default favoriteRequestReducer