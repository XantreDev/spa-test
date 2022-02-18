import { LSAction, SearchState } from "../../types/stateTypes";


const lastSearchStateReducer: (
    state: SearchState | null,
    action: LSAction
) => SearchState | null = (state = null, action) => {
    switch (action.type){
        case 'last-search/set':
            return action.payload
        default:
            return state
    }
};

export default lastSearchStateReducer