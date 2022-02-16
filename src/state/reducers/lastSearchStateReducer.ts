import { searchState } from "./searchStateReducer";

export type lastSearchStateType = "setNewState";

export type lastSearchStateAction = {
    type: lastSearchStateType;
    payload: searchState;
};

const lastSearchStateReducer: (
    state: searchState | null,
    action: lastSearchStateAction
) => searchState | null = (state = null, action) => {
    switch (action.type){
        case 'setNewState':
            return action.payload
        default:
            return state
    }
};

export default lastSearchStateReducer