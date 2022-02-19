import { bindActionCreators } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataService from "../Services/DataService";
import { AC } from "../state";
import { RootState, SearchState } from "../types/stateTypes";

const isSearchState = (state: any) =>
    (state ?? false) && (state.searchRequest ?? false);

const useSyncSearch = () => {
    const searchState = useSelector((state: RootState) => state.searchState);
    const lastSearchState = useSelector(
        (state: RootState) => state.lastSearchState
    );

    const dispatch = useDispatch();
    const { setLastSearchState, setSearchRequestState } = bindActionCreators(
        AC,
        dispatch
    );

    const userToken = useSelector((state: RootState) => state.userToken) ?? "";

    useEffect(() => {
        const data = DataService.getStorage(userToken).lastRequest;
        if (!isSearchState(lastSearchState) && isSearchState(data)) {
            const datedSearchState: SearchState = data as SearchState;
            setLastSearchState(datedSearchState);
            setSearchRequestState(datedSearchState);
        }
    }, []);

    useEffect(() => {
        if (searchState.result !== undefined) {
            setLastSearchState(searchState);
        }
    }, [searchState.result]);

    useEffect(() => {
        if (isSearchState(lastSearchState)) {
            DataService.updateLastRequestStorage(userToken, lastSearchState);
        }
    }, [lastSearchState]);

    return lastSearchState !== null;
};

export default useSyncSearch;
