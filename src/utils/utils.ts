import { searchState as searchStateType } from './../state/reducers/searchStateReducer';

export const isStateResultWiilBeSame = (state: searchStateType) => (favoriteState: searchStateType) => favoriteState.ordedBy === state.ordedBy && favoriteState.searchRequest === state.searchRequest

export const isInFavorites = (favorites: searchStateType[], state: searchStateType) => favorites
    .some(isStateResultWiilBeSame(state))

export const isInFavoritesAndHaveResult = (favorites: searchStateType[], state: searchStateType) => state.executed && isInFavorites(favorites, state)

export const indexInFavorites = (favorites: searchStateType[], 
    state: searchStateType) => favorites
        .findIndex(isStateResultWiilBeSame(state))
