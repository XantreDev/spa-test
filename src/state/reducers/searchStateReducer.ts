import { ResultObject, SortType } from "../../types/stateTypes";
import { SRAction, SearchState } from "../../types/stateTypes";

export const defaultState: SearchState = {
    searchRequest: "",
    needToSearch: false,
    ordedBy: "null",
    executed: false,
    requiredCount: 12,
};

const searchStateReducer: (
    state: SearchState | undefined,
    action: SRAction
) => SearchState = (state = defaultState, action) => {
    switch (action.type) {
        case "request/changed":
            return {
                ...state,
                ...defaultState,
                searchRequest: action.payload,
                needToSearch: false,
            };
        case "request/started":
            return {
                ...state,
                needToSearch: true,
            };
        case "request/order-setted":
            return {
                ...state,
                ordedBy: action.payload,
            };
        case "request/finished":
            return {
                ...state,
                needToSearch: false,
                executed: true,
                result: action.payload,
            };
        case "request/set-new-state":
            return action.payload;
        default:
            return state;
    }
};

export default searchStateReducer;
