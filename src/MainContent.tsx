import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import FavoritePage from "./FavoritePage";
import SearchPage from "./SearchPage";
import DataService from "./Services/DataService";
import { RootState } from "./state/store";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from "./state";
import { searchState as searchStateType } from './state/reducers/searchStateReducer';
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
