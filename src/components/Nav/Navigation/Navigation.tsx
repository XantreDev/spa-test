import React from 'react'
import HeaderButton, { buttonType } from '../../../UI/HeaderButton/HeaderButton'
import Logo from '../../../UI/Logo/Logo'
import styles from './Navigation.module.scss'
import { ROUTES } from '../../../App';
import { useResolvedPath, useLocation } from 'react-router-dom';

const Navigation = () => {
    const favoritePath = useResolvedPath(ROUTES.favorite)
    const searchPath = useResolvedPath(ROUTES.search)
    const history = useLocation()
    const searchStatus: buttonType = history.pathname === searchPath.pathname ? 'active' : 'inactive'
    const favoriteStatus: buttonType = history.pathname === favoritePath.pathname ? 'active' : 'inactive'

    return (
        <div className={styles.navigation}>
            <Logo size='4.8rem'/>
            <HeaderButton link={searchPath.pathname} type={searchStatus}>Поиск</HeaderButton>
            <HeaderButton link={favoritePath.pathname} type={favoriteStatus}>Избранное</HeaderButton>  
        </div>
    )
}

export default Navigation