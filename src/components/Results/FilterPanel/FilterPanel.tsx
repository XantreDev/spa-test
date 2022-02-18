import React from "react";
import styles from "./FilterPanel.module.scss";
import ShowSelector, { FilterData } from "../ShowSelector/ShowSelector";
import { useSelector } from "react-redux";
import { RootState, SearchState } from "../../../types/stateTypes";

const FilterPanel: React.FC<FilterData> = ({ selected, setter }) => {
    const [searchRequest, resultsCount] = useSelector((state: RootState): [string, number] => {
        const lastStage: SearchState = state.lastSearchState
        const searchRequest = lastStage.searchRequest
        const totalResultsCount = lastStage.result?.totalResults ?? 0
        return [searchRequest, totalResultsCount]
    })
    return (
        <div className={styles.filterPanel}>
            <div className={styles.resultInfo}>
                Видео по запросу <b>«{searchRequest}»</b> <span>{resultsCount}</span>{" "}
            </div>
            <ShowSelector selected={selected} setter={setter} />
        </div>
    );
};

export default FilterPanel;
