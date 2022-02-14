import { authAction } from '../reducers/authReducer';

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