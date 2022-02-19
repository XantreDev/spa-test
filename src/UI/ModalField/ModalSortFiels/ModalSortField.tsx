import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, SortType } from "../../../types/stateTypes";
import { AC } from "../../../state";
import { SearchState } from "../../../types/stateTypes";
import styles from "./ModalSortField.module.scss";
import useSortState from "../../../hooks/useSortState";

type option = {
    [key in SortType]: string;
};

const options: option = {
    null: "Без сортировки",
    data: "Дате",
    rating: "Рейтингу",
    relevance: "Релевантности",
    title: "Названию",
    viewCount: "Количеству просмотров",
};

const ModalSortField = () => {
    const [sortState, setSortState] = useSortState();

    const optionsArray: SortType[] = Object.keys(options).map(
        (key) => key as SortType
    );

    return (
        <div className={styles.field}>
            <label htmlFor="sort">Сортировать по</label>
            <br />
            <select
                onChange={(event) =>
                    setSortState(event.target.value as SortType)
                }
                value={sortState}
                name={sortState}
                id=""
            >
                {optionsArray.map((key) => (
                    <option
                        style={
                            key === "null"
                                ? { color: "rgba($color: #171719, $alpha: .3)" }
                                : {}
                        }
                        key={key}
                        value={key}
                    >
                        {options[key]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ModalSortField;
