import { resultObject, sortResultsType } from '../../Services/SearchService';
import { authAction } from '../reducers/authReducer';
import { lastSearchStateAction } from '../reducers/lastSearchStateReducer';
import { SModalAction } from '../reducers/modalReducer';
import { searchRequestAction, searchState } from '../reducers/searchStateReducer';
import { RootDispatch } from '../store';

export const getAuth = (userToken: string) => {
    return (dispatch: any) => {
        const action: authAction = {
            type: 'auth',
            payload: userToken
        }

        dispatch(action)
    }
}

export const getExit = () => {
    return (dispatch: any) => {
        const action: authAction = {
            type: 'auth'
        }

        dispatch(action)
    }
}

// search Request

export const changeSearchRequest = (searchRequest: string ) => {
    return (dispatch: any) => {
        const action: searchRequestAction = {
            type: 'change',
            payload: searchRequest
        }
        dispatch(action)
    }
}

export const setSearchRequestState = (searchRequest: searchState ) => {
    return (dispatch: RootDispatch) => {
        dispatch({
            type: 'setSearchRequest',
            payload: searchRequest
        })
    }
}


export const setResultsOrderType = (orderType: sortResultsType) => {
    return (dispatch: any) => {
        const action: searchRequestAction = {
            type: 'setOrderType',
            payload: orderType
        }
        dispatch(action)
    }
}

export const startSearchRequest = () => (disptch: any) => {
    const action: searchRequestAction = {
        type: 'searchRequest'
    }
    disptch(action)
}

export const finishSearchRequest = (results: resultObject) => (disptch: any) => {
    const action: searchRequestAction = {
        type: 'searchRequestFinished',
        payload: results
    }
    disptch(action)
}

// search LastRequest

export const setLastSearchState = (state: searchState) => (dispatch: any) => {
    const action: lastSearchStateAction = {
        type: 'setNewState',
        payload: state
    }

    dispatch(action)
}

// favorite Requests

export const setFavoriteResults = (states: searchState[]) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'setFavoriteRequests',
        payload: states
    })
}

export const updateFavoriteResult = (state: searchState, index: number) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'updateFavoriteRequest',
        payload: {
            data: state,
            index
        }
    })
}

export const pushFavoriteResult = (state: searchState) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'pushFavoriteRequest',
        payload: state
    })
}

export const createModal = (kind: SModalAction, toEdit: searchState) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'createModal',
        payload: {
            action: kind,
            toEdit: toEdit
        }
    })
}

export const killModal = () => (dispatch: RootDispatch) => {
    dispatch({
        type: 'killModal'
    })
}

export const modalEdit = (state: searchState) => (dispatch: RootDispatch) => {
    dispatch({
        type: 'changeSModal',
        payload: state
    })
}