import { bindActionCreators } from '@reduxjs/toolkit';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataService from '../Services/DataService';
import { AC } from '../state';
import { isSearchState, searchState } from '../state/reducers/searchStateReducer';
import { RootState } from '../state/store';

const useSyncSearch = () => {
    const searchState = useSelector((state: RootState) => state.searchState);
    const lastSearchState = useSelector((state: RootState) => state.lastSearchState)

    const dispatch = useDispatch();
    const { setLastSearchState } = bindActionCreators(
        AC,
        dispatch
    );

    const userToken = useSelector((state: RootState) => state.userToken) ?? ''

    useEffect(() => {
        const data = DataService.getStorage(userToken).lastRequest
        if (!isSearchState(lastSearchState) && isSearchState(data)){
            const datedSearchState: searchState = data
            setLastSearchState(datedSearchState)
        }
    }, [])

    useEffect(() => {
        if (searchState.result !== undefined){
            setLastSearchState(searchState)
        }
    }, [searchState.result])

    useEffect(() => {
        if (isSearchState(lastSearchState)){
            DataService.updateLastRequestStorage(userToken, lastSearchState)
        }
    }, [lastSearchState])

    return lastSearchState !== null;
}

export default useSyncSearch