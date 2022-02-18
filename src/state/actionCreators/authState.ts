import { AAction, RootDispatch } from "../../types/stateTypes";

export const getAuth = (userToken: string) => {
    return (dispatch: RootDispatch) => {
        const action: AAction = {
            type: 'auth/enter',
            payload: userToken
        }

        dispatch(action)
    }
}

export const getExit = () => {
    return (dispatch: RootDispatch) => {
        const action: AAction = {
            type: 'auth/exit'
        }

        dispatch(action)
    }
}

