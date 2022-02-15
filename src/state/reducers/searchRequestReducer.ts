export type searchRequestActionType = 'change' | 'searchRequest' | 'searchRequestFinished'

export type searchRequestAction = {type: searchRequestActionType, payload?: string | any[]}


export interface searchState {
    searchRequest: string,
    needToSearch: boolean,
    canShow: boolean,
    results: any[]
}

const defaultState: searchState = {
    searchRequest: '',
    needToSearch: false,
    canShow: false,
    results: []
}

const searchStateReducer: (state: searchState | undefined, action: searchRequestAction) => searchState = (state = defaultState, action) => {
    switch (action.type) {
        case 'change':
            return {
                ...state,
                searchRequest: typeof action.payload === 'string' ? action.payload : '',
                needToSearch: false,
            }
        case 'searchRequest':
            return {
                ...state,
                needToSearch: true
            }
        case 'searchRequestFinished':
            return {
                ...state,
                needToSearch: false,
                canShow: true,
                results: typeof action.payload === 'object' ? action.payload : []
            }
        default:
            return state
    }
}

export default searchStateReducer