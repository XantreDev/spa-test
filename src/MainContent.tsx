import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./FavoritePage";
import SearchPage from "./SearchPage";
import DataService from "./Services/DataService";
import { setFavoriteResults } from "./state/actionCreators";
import { RootState } from "./state/store";
import { useSelector } from 'react-redux';

export const ROUTES = { index: "/", search: "/", favorite: "/favorite" };


const MainContent = () => {
    // useRed
    const userToken = useSelector((state: RootState) => state.userToken) ?? ''

    useEffect(() => {

        setFavoriteResults(DataService.getStorage(userToken).favorites)
    }, [])

    return (
        <Routes>
            <Route
                path="/"
                element={<SearchPage/>}
            />
            <Route
                path={ROUTES.favorite}
                element={
                    <FavoritePage/>
                }
            />
        </Routes>   
    );
};

export default MainContent;
