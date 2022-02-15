import { authAction } from '../reducers/authReducer';
import { searchRequestAction } from '../reducers/searchRequestReducer';

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

export const startSearchRequest = () => (disptch: any) => {
    const action: searchRequestAction = {
        type: 'searchRequest'
    }
    disptch(action)
}

export const finishSearchRequest = (results: any[]) => (disptch: any) => {
    const action: searchRequestAction = {
        type: 'searchRequestFinished',
        payload: results
    }
    disptch(action)
}

