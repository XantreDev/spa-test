import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataService from "../Services/DataService";
import { AC } from "../state";
import {
    RootState,
    SearchState as SearchStateType,
} from "./../types/stateTypes";

const useUpdateFavorites = () => {
    const userToken = useSelector((state: RootState) => state.userToken) ?? "";

    const dispatch = useDispatch();
    const { setFavoriteRequests: setFavoriteResults } = bindActionCreators(
        AC,
        dispatch
    );

    const favorites: SearchStateType[] = useSelector(
        (state: RootState) => state.favoriteResults
    );

    useEffect(() => {
        setFavoriteResults(DataService.getStorage(userToken).favorites);
    }, []);

    useEffect(() => {
        DataService.updateFavoriteStorage(userToken, favorites);
    }, [favorites]);
};

export default useUpdateFavorites;
