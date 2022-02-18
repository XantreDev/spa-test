import { resultObject, sortResultsType } from "../../Services/SearchService";

export type searchRequestActionType =
    | "change"
    | "searchRequest"
    | "searchRequestFinished"
    | "setOrderType";

export type searchRequestAction =
    | {
          type: searchRequestActionType;
          payload?: string | sortResultsType | resultObject;
      }
    | ActionsSetSearchState;

export interface searchState {
    searchRequest: string;
    needToSearch: boolean;
    executed: boolean;
    ordedBy: sortResultsType;
    searchName?: string | undefined;
    requiredCount: number;
    result?: resultObject;
}

const defaultState: searchState = {
    searchRequest: "",
    needToSearch: false,
    ordedBy: "null",
    executed: false,
    requiredCount: 12,
};

type ActionsSetSearchState = {
    type: "setSearchRequest";
    payload: searchState;
};

export function isSearchState(data: any): data is searchState {
    return (
        isResultObject((data as searchState)?.result) &&
        (data as searchState).searchRequest !== undefined
    );
}

function isResultObject(data: any): data is resultObject {
    return (data as resultObject)?.totalResults !== undefined;
}

function isOrderType(data: any): data is sortResultsType {
    return (data as sortResultsType) !== undefined && typeof data === "string";
}

const searchStateReducer: (
    state: searchState | undefined,
    action: searchRequestAction
) => searchState = (state = defaultState, action) => {
    switch (action.type) {
        case "change":
            return {
                ...state,
                ...defaultState,
                searchRequest:
                    typeof action.payload === "string" ? action.payload : "",
                needToSearch: false,
            };
        case "searchRequest":
            return {
                ...state,
                needToSearch: true,
            };
        case "setOrderType":
            return {
                ...state,
                ordedBy: isOrderType(action.payload)
                    ? action.payload
                    : "null",
            };
        case "searchRequestFinished":
            return {
                ...state,
                needToSearch: false,
                executed: true,
                result: isResultObject(action.payload)
                    ? action.payload
                    : undefined,
            };
        case "setSearchRequest":
            return action.payload;
        default:
            return state;
    }
};

export default searchStateReducer;
