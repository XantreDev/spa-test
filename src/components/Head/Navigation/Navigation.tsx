import React from 'react'
import HeaderButton, { buttonStatusType } from '../../../UI/HeaderButton/HeaderButton'
import styles from './Navigation.module.scss'
import { ROUTES } from '../../../MainContent';
import { useResolvedPath, useLocation } from 'react-router-dom';
import HeaderLogo from '../../../UI/Logo/HeaderLogo';

const Navigation = () => {
    const favoritePath = useResolvedPath(ROUTES.favorite)
    const searchPath = useResolvedPath(ROUTES.search)
    const history = useLocation()
    const searchStatus: buttonStatusType = history.pathname === searchPath.pathname ? 'active' : 'inactive'
    const favoriteStatus: buttonStatusType = history.pathname === favoritePath.pathname ? 'active' : 'inactive'

    return (
        <div className={styles.navigation}>
            <HeaderLogo/>
            <HeaderButton link={searchPath.pathname} type='search' statusType={searchStatus}>Поиск</HeaderButton>
            <HeaderButton link={favoritePath.pathname} type='favorite' statusType={favoriteStatus}>Избранное</HeaderButton>  
        </div>
    )
}

export default Navigation