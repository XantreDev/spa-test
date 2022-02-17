import { searchState } from "./searchStateReducer"

export type SModal = {
    modalExist: boolean,
    editableResult: searchState | null,
    action: SModalAction
}



export type SModalAction = { kind: 'push' } | { kind: 'replace', index: number }

const defaultModalState:SModal = {
    modalExist: false,
    editableResult: null,
    action: {
        kind: 'push'
    }
}

type ActionSModalEdit = {
    type: 'changeSModal',
    payload: searchState
}

type ActionSModalCreate = {
    type: 'createModal',
    payload: {
        action: SModalAction,
        toEdit: searchState
    }
} 

type ActionModalKill = {
    type: 'killModal'
}

export type ActionSModal = ActionSModalEdit | ActionSModalCreate | ActionModalKill

// const isNeedToSearchAgain = (state: SModal, action: ActionSModal) => {
//     if (action.type === 'createModal') return action.payload.action.kind === 'replace'
//     // else if (action.type === 'changeSModal'){
//     //     return !(state.editableResult.)
//     // }
//     return false
// }

const modalReducer = (state: SModal = defaultModalState, action: ActionSModal): SModal =>{
    switch (action.type) {
        case 'changeSModal':
            return {
                ...state,
                editableResult: action.payload
            }
        case 'createModal':
            // const needToSearchAgain = action.payload.action.kind === 'replace' 
            return {
                modalExist: true,
                action: action.payload.action,
                editableResult: {
                    ...action.payload.toEdit,
                    result: undefined,
                    needToSearch: true,
                    executed: false
                    // result:  needToSearchAgain ? undefined : action.payload.toEdit.result,
                    // needToSearch: needToSearchAgain ? true : action.payload.toEdit.needToSearch,
                    // executed: needToSearchAgain ? false : action.payload.toEdit.executed,
                }
            }
        case 'killModal':
            return {
                ...state,
                modalExist: false
            }
        default:
            return state
    }
}

export default modalReducer