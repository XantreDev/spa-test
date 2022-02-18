import { bindActionCreators } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AC } from '../state';
import { RootState } from '../state/store';
import { indexInFavorites, isInFavorites, isInFavoritesAndHaveResult } from '../utils/utils';
import { searchState as searchStateType } from './../state/reducers/searchStateReducer';

const useCacheFavorites = () => {
    const favorites: searchStateType[] = useSelector((state: RootState) => state.favoriteResults)

    const dispatch = useDispatch()

    const {updateFavoriteResult } = bindActionCreators(AC, dispatch)

    const searchState: searchStateType = useSelector((state: RootState) => state.searchState)
    const lastSearchState: searchStateType = useSelector((state: RootState) => state.lastSearchState)

    useEffect(() => {
        const tryCache = (favorites: searchStateType[], state: searchStateType) => {
            if (state.executed && isInFavorites(favorites, state)){
                const index = indexInFavorites(favorites, state)
                updateFavoriteResult({
                    ...favorites[index],
                    result: state.result
    
                }, index)
                return true
            } return false
        }

        let tryResult = false

        if (lastSearchState !== null && isInFavoritesAndHaveResult(favorites, lastSearchState)){
            tryResult = tryCache(favorites, lastSearchState)
        }

        if (!tryResult && searchState !== null && isInFavoritesAndHaveResult(favorites, searchState)){
            tryCache(favorites, searchState)
        }

    }, [lastSearchState, searchState])
}

export default useCacheFavorites