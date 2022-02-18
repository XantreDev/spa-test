export type likeStateType = {
    active: boolean,
    index: number,
    rightNowSetted: boolean
}

interface LActionActivate {
    type: 'activateLike',
    payload: {
        index: number
    }
}

interface LActionSet {
    type: 'setLike',
    payload: {
        index: number
    }
}

interface LActionDisable{
    type: 'disableLike',
}

type LikeActions = LActionActivate | LActionSet | LActionDisable

const initialLikeState: likeStateType = {active: false, index: 0, rightNowSetted: false}

const likeReducer = (state: likeStateType = initialLikeState, action: LikeActions): likeStateType => {
    switch (action.type){
        case 'activateLike':
            return ({
                active: true,
                index: action.payload.index,
                rightNowSetted: false
            })
        case 'disableLike':
            return ({
                ...initialLikeState
            })
        case 'setLike':
            return ({
                active: true,
                index: action.payload.index,
                rightNowSetted: true
            })
        default:
            return state
    }
}

export default likeReducer 