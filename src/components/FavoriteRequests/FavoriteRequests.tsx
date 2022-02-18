import React from 'react'
import { useSelector } from 'react-redux';
import styles from './FavoriteRequests.module.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../state';
import { RootState, SearchState } from '../../types/stateTypes';

const FavoriteResults = () => {
    const favorites: SearchState[] = useSelector((state: RootState) => state.favoriteResults)
    const redirecter = useNavigate()

    const dipatch = useDispatch()
    const { setLastSearchState, setSearchRequestState, removeFavoriteRequest, createModal, activateLike } = bindActionCreators(AC, dipatch)

    const showResult = (index: number) => () => {
        // setLastSearchState(favorites[index])
        setSearchRequestState(favorites[index])
        activateLike(index)
        redirecter('/')
    }

    const deleteResult = (index: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        removeFavoriteRequest(index)
    }

    const editResult = (index: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        createModal({ index: index, kind: 'replace' }, favorites[index])
    }


    return (
    <div className={styles.favorite}>{
        favorites.map((request, index) => (
        <div key={index} className={styles.favoriteRequest}>{request.searchName ? request.searchName : request.searchRequest }
            <div onClick={showResult(index)} className={styles.actionsWrapper}>
                <button onClick={editResult(index)} className={`${styles.blue} ${styles.button}`}>Изменить</button>
                <button onClick={deleteResult(index)} className={`${styles.red} ${styles.button}`}>Удалить</button>
            </div>
        </div>
        ))
    }</div>
  )
}

export default FavoriteResults