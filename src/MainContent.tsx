import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorite from "./components/Favorite/Favorite";
import Head from "./components/Head/Head";
import Results from "./components/Results/Results";
import Search from "./components/Search/Search";
import useSyncSearch from "./hooks/useSyncSearch";

export const ROUTES = { index: "/", search: "/", favorite: "/favorite" };

const MainContent = () => {
    const canShow = useSyncSearch();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <React.Fragment>
                        <Head />
                        {canShow ? <Results /> : <Search />}
                    </React.Fragment>
                }
            />
            <Route
                path={ROUTES.favorite}
                element={
                    <React.Fragment>
                        <Head />
                        <Favorite />
                    </React.Fragment>
                }
            />
        </Routes>
    );
};

export default MainContent;
