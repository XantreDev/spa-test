import {
    RootDispatch,
    SearchState,
    SModalAction,
} from "../../types/stateTypes";

export const createModal =
    (kind: SModalAction, toEdit: SearchState) => (dispatch: RootDispatch) => {
        dispatch({
            type: "modal/create",
            payload: {
                action: kind,
                toEdit: toEdit,
            },
        });
    };

export const killModal = () => (dispatch: RootDispatch) => {
    dispatch({
        type: "modal/kill",
    });
};

export const modalEdit = (state: SearchState) => (dispatch: RootDispatch) => {
    dispatch({
        type: "modal/edit",
        payload: state,
    });
};
