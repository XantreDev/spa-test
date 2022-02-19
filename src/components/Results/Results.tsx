import React from "react";
import SearchHeader from "../../UI/SearchHeader/SearchHeader";
import SearchBox from "../SearchBox/SearchBox";
import SearchResults from "./SearchResults/SearchResults";
import PageContainer from "../../UI/Container/PageContainer";
import Header from "../../UI/Header/Header";

const Results = () => {
    return (
        <PageContainer>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.2rem",
                }}
            >
                <Header>Поиск видео</Header>
                <SearchBox />
            </div>

            <SearchResults />
        </PageContainer>
    );
};

export default Results;
