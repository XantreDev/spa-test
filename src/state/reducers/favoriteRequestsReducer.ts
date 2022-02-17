import { searchState } from "./searchStateReducer";

type ActionSetFavoriteRequests = {
    type: 'setFavoriteRequests',
    payload: searchState[]
}

type ActionUpdateFavoriteRequest = {
    type: 'updateFavoriteRequest',
    payload: {
        index: number,
        data: searchState
    }
}

type ActionPushFavoriteRequest = {
    type: 'pushFavoriteRequest',
    payload: searchState
}

type ActionsFavoriteRequest = ActionPushFavoriteRequest | ActionSetFavoriteRequests | ActionUpdateFavoriteRequest

const favoriteRequestReducer: (state: searchState[], action: ActionsFavoriteRequest) => searchState[] = (state = [], action) => {
    switch (action.type){
        case 'pushFavoriteRequest':
            return [...state, action.payload]
        case 'setFavoriteRequests':
            return [...action.payload]
        case 'updateFavoriteRequest':
            return state.map((state, index) => index !== action.payload.index ? state : action.payload.data)
        default:
            return state    
    }
}

export default favoriteRequestReducer