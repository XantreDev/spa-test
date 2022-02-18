import React from 'react'
import HeadButton, { buttonStatusType } from '../../../UI/HeaderButton/HeaderButton'
import styles from './Navigation.module.scss'
import { ROUTES } from '../../../MainContent';
import { useResolvedPath, useLocation, useNavigate } from 'react-router-dom';
import HeadLogo from '../../../UI/Logo/HeaderLogo';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../../state';
import { defaultState } from './../../../state/reducers/searchStateReducer';

const Navigation = () => {
    const favoritePath = useResolvedPath(ROUTES.favorite)
    const searchPath = useResolvedPath(ROUTES.search)
    const history = useLocation()
    const searchStatus: buttonStatusType = history.pathname === searchPath.pathname ? 'active' : 'inactive'
    const favoriteStatus: buttonStatusType = history.pathname === favoritePath.pathname ? 'active' : 'inactive'

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { setLastSearchState, setSearchRequestState } = bindActionCreators(AC, dispatch)

    const resetSearch = () => {}
    // const resetSearch = () => {
    //     if (searchStatus === 'inactive'){
    //         navigate(ROUTES.search)
    //     }

    //     // TODO: SMELLS BAD

    //     setTimeout(() => {
    //         setLastSearchState(null)
    //         setSearchRequestState(defaultState)
    //     }, 15)
    // }

    return (
        <div className={styles.navigation}>
            <HeadLogo onClick={resetSearch}/>
            <HeadButton link={searchPath.pathname} type='search' statusType={searchStatus}>Поиск</HeadButton>
            <HeadButton link={favoritePath.pathname} type='favorite' statusType={favoriteStatus}>Избранное</HeadButton>  
        </div>
    )
}

export default Navigation