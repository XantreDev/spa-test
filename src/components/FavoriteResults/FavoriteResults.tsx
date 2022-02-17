import React from 'react'
import DataService from './../../Services/DataService';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { searchState } from './../../state/reducers/searchStateReducer';


const FavoriteResults = () => {
    const favorites: searchState[] = useSelector((state: RootState) => state.favoriteResults)
    return (
    <div>{
        favorites.map(request => (<div>{request.searchRequest}</div>))
    }</div>
  )
}

export default FavoriteResults