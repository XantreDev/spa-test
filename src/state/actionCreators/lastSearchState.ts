import { LSAction, SearchState } from "../../types/stateTypes";

// search LastRequest

export const setLastSearchState =
    (state: SearchState | null) => (dispatch: any) => {
        const action: LSAction = {
            type: "last-search/set",
            payload: state,
        };

        dispatch(action);
    };
