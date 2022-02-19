//  likeState

import { RootDispatch } from "../../types/stateTypes";

export const activateLike = (index: number) => (dispatch: RootDispatch) => {
    dispatch({
        type: "like/activate",
        payload: {
            index,
        },
    });
};

export const setLike = (index: number) => (dispatch: RootDispatch) => {
    dispatch({
        type: "like/set",
        payload: {
            index,
        },
    });
};

export const disableLike = () => (dispatch: RootDispatch) => {
    dispatch({
        type: "like/disable",
    });
};
