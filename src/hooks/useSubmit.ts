import React from "react";
import { modalType } from "../components/ModalWindow/ModalWindow";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../types/stateTypes";
import { SearchState as SearchStateType } from "../types/stateTypes";
import { AC } from "../state";

const useSubmit = (typeOfModal: modalType) => {
    const afterEditRequest = useSelector(
        (state: RootState) => state.modalState.editableResult as SearchStateType
    );
    const lastSearchRequest = useSelector(
        (state: RootState) => state.lastSearchState as SearchStateType
    );
    const index = useSelector((state: RootState) =>
        state.modalState.action.kind === "replace"
            ? state.modalState.action.index
            : 0
    );
    const favoritesLenght = useSelector(
        (state: RootState) =>
            (state.favoriteResults as SearchStateType[]).length
    );

    const dispatch = useDispatch();
    const {
        killModal,
        pushFavoriteRequest: pushFavoriteResult,
        updateFavoriteRequest: updateFavoriteResult,
        setLike,
    } = bindActionCreators(AC, dispatch);

    const changeCallback = () => {
        updateFavoriteResult(afterEditRequest, index);
        killModal();
    };
    const pushCallback = () => {
        const favRequest: SearchStateType =
            lastSearchRequest.ordedBy === afterEditRequest.ordedBy
                ? {
                      ...afterEditRequest,
                      executed: true,
                      needToSearch: false,
                      result: lastSearchRequest.result,
                  }
                : { ...afterEditRequest };
        pushFavoriteResult(favRequest);
        setLike(favoritesLenght);
        killModal();
    };
    const submitCallback =
        typeOfModal === "push" ? pushCallback : changeCallback;

    return [submitCallback, killModal];
};

export default useSubmit;
