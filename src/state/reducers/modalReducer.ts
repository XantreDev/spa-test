import { MAction, SModal } from "../../types/stateTypes"

const defaultModalState: SModal = {
    modalExist: false,
    editableResult: null,
    action: {
        kind: 'push'
    }
}

const modalReducer = (state: SModal = defaultModalState, action: MAction): SModal =>{
    switch (action.type) {
        case "modal/edit":
            return {
                ...state,
                editableResult: action.payload
            }
        case "modal/create":
            return {
                modalExist: true,
                action: action.payload.action,
                editableResult: {
                    ...action.payload.toEdit,
                    result: undefined,
                    needToSearch: true,
                    executed: false
                }
            }
        case 'modal/kill':
            return {
                ...state,
                modalExist: false
            }
        default:
            return state
    }
}

export default modalReducer