import { bindActionCreators } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AC } from "../state";
import { RootState, SearchState, SortType } from "../types/stateTypes";

const useSortState = (): [SortType, (order: SortType | null) => void] => {
    const editableResult = useSelector(
        (state: RootState) => state.modalState.editableResult
    ) as SearchState;
    const sortState: SortType = editableResult?.ordedBy ?? "null";
    const dispatch = useDispatch();
    const { modalEdit } = bindActionCreators(AC, dispatch);

    const setSortState = (order: SortType | null) => {
        modalEdit({
            ...editableResult,
            ordedBy: order ?? "null",
        });
    };

    return [sortState, setSortState];
};

export default useSortState;
