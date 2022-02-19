import React from "react";
import GridIcon from "../../../UI/GridIcon/GridIcon";
import ListIcon from "../../../UI/ListIcon/ListIcon";
import { viewType } from "../SearchResults/SearchResults";
import styles from "./ShowSelector.module.scss";

export interface FilterData {
    selected: viewType;
    setter: (arg: viewType) => void;
}

const ShowSelector: React.FC<FilterData> = ({ selected, setter }) => {
    return (
        <div className={styles.container}>
            <ListIcon
                onClick={() => setter("list")}
                active={selected === "list"}
            />
            <GridIcon
                onClick={() => setter("cards")}
                active={selected === "cards"}
            />
        </div>
    );
};

export default ShowSelector;
