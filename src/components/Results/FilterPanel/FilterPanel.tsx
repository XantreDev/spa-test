import React from "react";
import styles from "./FilterPanel.module.scss";
import ShowSelector, { FilterData } from "../ShowSelector/ShowSelector";

const FilterPanel: React.FC<FilterData> = ({ selected, setter }) => {
    const request = "1234";
    const resultsCount = 5;
    return (
        <div className={styles.filterPanel}>
            <div className={styles.resultInfo}>
                Видео по запросу <b>«{request}»</b> <span>{resultsCount}</span>{" "}
            </div>
            <ShowSelector selected={selected} setter={setter} />
        </div>
    );
};

export default FilterPanel;
