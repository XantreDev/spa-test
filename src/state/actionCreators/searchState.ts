import { ResultObject, RootDispatch, SRAction, SearchState, SortType } from "../../types/stateTypes";

// search Request

export const changeSearchRequest = (searchRequest: string) => {
    return (dispatch: RootDispatch) => {
        const action: SRAction = {
            type: 'request/changed',
            payload: searchRequest
        };
        dispatch(action);
    };
};

export const setSearchRequestState = (searchRequest: SearchState) => {
    return (dispatch: RootDispatch) => {
        dispatch({
            type: 'request/set-new-state',
            payload: searchRequest
        });
    };
};


export const setRequestOrderType = (orderType: SortType) => {
    return (dispatch: RootDispatch) => {
        const action: SRAction = {
            type: 'request/order-setted',
            payload: orderType
        };
        dispatch(action);
    };
};

export const startSearchRequest = () => (disptch: RootDispatch) => {
    const action: SRAction = {
        type: 'request/started'
    };
    disptch(action);
};

export const finishSearchRequest = (results: ResultObject) => (disptch: RootDispatch) => {
    const action: SRAction = {
        type: 'request/finished',
        payload: results
    };
    disptch(action);
};
