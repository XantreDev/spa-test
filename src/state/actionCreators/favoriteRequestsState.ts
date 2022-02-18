import { RootDispatch, SearchState } from "../../types/stateTypes";

// favorite Requests

export const setFavoriteRequests = (states: SearchState[]) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'favorite-requests/set-all',
        payload: states
    });
};

export const updateFavoriteRequest = (state: SearchState, index: number) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'favorite-requests/update',
        payload: {
            data: state,
            index
        }
    });
};

export const pushFavoriteRequest = (state: SearchState) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'favorite-requests/push',
        payload: state
    });
};

export const removeFavoriteRequest = (index: number) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'favorite-requests/remove',
        payload: index
    });
};




