import { bindActionCreators } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataService from '../Services/DataService';
import { AC } from '../state';
import { RootState } from '../state/store';
import { searchState as searchStateType } from './../state/reducers/searchStateReducer';

const useUpdateFavorites = () => {
    const userToken = useSelector((state: RootState) => state.userToken) ?? ''

    const dispatch = useDispatch()
    const { setFavoriteResults } = bindActionCreators(AC, dispatch)

    const favorites: searchStateType[] = useSelector((state: RootState) => state.favoriteResults)


    useEffect(() => {
        setFavoriteResults(DataService.getStorage(userToken).favorites)
    }, [])

    useEffect(() => {
        DataService.updateFavoriteStorage(userToken, favorites)
    }, [favorites])
}

export default useUpdateFavorites