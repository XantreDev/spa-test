import React from "react";
import styles from "./MainSearchBox.module.scss";
import SearchButton from "../../../UI/Button/SearchButton";
import useSearch from '../../../hooks/useSearch';

const MainSearchBox = () => {
    const [searchRequest, setSearchRequest, sendSearchRequest] = useSearch()
    // console.log(searchRequest)
    
    return (
        <div className={styles.searchContainer}>
            <input
                value={searchRequest}
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => setSearchRequest(event.target.value)}
                placeholder="Что хотите посмотреть?"
                className={styles.searchBox}
                type="text"
                name="search"
                id="search"
            />
            <SearchButton onClick={sendSearchRequest}>Найти</SearchButton>
        </div>
    );
};

export default MainSearchBox;
