import React from 'react'
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";
import useCacheFavorites from "./hooks/useCacheFavorites";
import useUpdateFavorites from "./hooks/useUpdateFavorites";

export const ROUTES = { index: "/", search: "/", favorite: "/favorite" };


const MainContent = () => {
    // useRed
    useUpdateFavorites()

    useCacheFavorites()    

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
