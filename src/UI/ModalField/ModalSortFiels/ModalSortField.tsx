import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortResultsType } from "../../../Services/SearchService";
import { AC } from "../../../state";
import { searchState } from "../../../state/reducers/searchStateReducer";
import { RootState } from "../../../state/store";
import styles from './ModalSortField.module.scss'

type option = {
    [key in sortResultsType]: string
}

const ModalSortField = () => {
    const editableResult = (useSelector((state: RootState) => state.modalState.editableResult) as searchState) 
    console.log(editableResult)
    const sortState: sortResultsType = editableResult?.ordedBy ?? 'null'
    const dispatch = useDispatch()
    const { modalEdit } = bindActionCreators(AC, dispatch)

    const setSortState = (order: sortResultsType | null) => {
        modalEdit({
            ...editableResult,
            ordedBy: order ?? 'null'
        })
    }
    const options: option = {
        null: 'Без сортировки',
        data: "Дате",
        rating: "Рейтингу",
        relevance: "Релевантности",
        title: "Названию",
        viewCount: "Количеству просмотров"
    }


    const optionsArray: sortResultsType[] = Object.keys(options).map(key => key as sortResultsType)

    return (
        <div className={styles.field}>
            <label htmlFor="sort">Сортировать по</label>
            <br />
            <select
                onChange={(event) =>
                    setSortState(event.target.value as sortResultsType)
                }
                value={sortState}
                name={sortState}
                id=""
            >
                {/* <option value="" disabled selected hidden>
                    Без сортировки
                </option> */}
                {optionsArray.map((key) => (
                    // key !== 'null' ?
                    <option style={key === 'null' ? {color: "rgba($color: #171719, $alpha: .3)"}: {}} key={key} value={key}>{options[key]}</option>
                    // : ''
                ))}
            </select>
        </div>
    );
};

export default ModalSortField;
