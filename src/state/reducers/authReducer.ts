import { AAction } from "../../types/stateTypes"

const authReducer = (state: string = '', action: AAction) => {
    switch (action.type) {
        case 'auth/enter':
            return action.payload
        case 'auth/exit':
            return ''
        default:
            return state
    }
}

export default authReducer