import React from "react";
import Container from "../../UI/Container/Container";
import styles from "./Search.module.scss";
import MainSearchBox from "../SearchBox/MainSearchBox/MainSearchBox";
import SearchHeader from "../../UI/SearchHeader/SearchHeader";

const Search = () => {
    return (
        <Container className={styles.align}>
            <SearchHeader>Поиск видео</SearchHeader>
            <MainSearchBox />
        </Container>
    );
};

export default Search;
