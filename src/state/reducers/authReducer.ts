export interface authAction {
    type: 'auth' | 'exit',
    payload?: string
}

const authReducer = (state: string = '', action: authAction) => {
    switch (action.type) {
        case 'auth':
            return action.payload
        case 'exit':
            return ''
        default:
            return state
    }
}

export default authReducer