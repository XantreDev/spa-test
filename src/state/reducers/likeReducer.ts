import { LikeActions, likeStateType } from "../../types/stateTypes"

const initialLikeState: likeStateType = {active: false, index: 0, rightNowSetted: false}

const likeReducer = (state: likeStateType = initialLikeState, action: LikeActions): likeStateType => {
    switch (action.type){
        case 'like/activate':
            return ({
                active: true,
                index: action.payload.index,
                rightNowSetted: false
            })
        case "like/disable":
            return ({
                ...initialLikeState
            })
        case "like/set":
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