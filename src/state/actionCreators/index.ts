import { resultObject, sortResultsType } from '../../Services/SearchService';
import { authAction } from '../reducers/authReducer';
import { lastSearchStateAction } from '../reducers/lastSearchStateReducer';
import { searchRequestAction, searchState } from '../reducers/searchStateReducer';

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

export const changeSearchRequest = (searchRequest: string ) => {
    return (dispatch: any) => {
        const action: searchRequestAction = {
            type: 'change',
            payload: searchRequest
        }
        dispatch(action)
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


export const setLastSearchState = (state: searchState) => (dispatch: any) => {
    const action: lastSearchStateAction = {
        type: 'setNewState',
        payload: state
    }

    dispatch(action)
}