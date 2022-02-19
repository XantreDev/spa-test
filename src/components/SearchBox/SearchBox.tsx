import React, { useCallback, useMemo } from 'react'
import useSearch from '../../hooks/useSearch';
import styles from './SearchBox.module.scss'
import SearchButton from '../../UI/Button/SearchButton';
import Like from '../../UI/Like/Like';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../state';
import { useState } from 'react';
import { useEffect } from 'react';
import LikePopUp from '../LikePopUp/LikePopUp';
import { likeStateType, RootState, SearchState } from '../../types/stateTypes';
import { isStateResultWiilBeSame } from '../../utils/utils';

const SearchBox = () => {
    const [searchRequest, setSearchRequest, sendSearchRequest, state] = useSearch()
    const dispatch = useDispatch()
    const { createModal, removeFavoriteRequest, disableLike } = bindActionCreators(AC, dispatch)
    
    const favorites: SearchState[] = useSelector((state: RootState) => state.favoriteResults)

    const likeState: likeStateType = useSelector((state: RootState) => state.likeState)
    const [active, rightNowSetted] = [likeState.active, likeState.rightNowSetted]

    const clickAction = useCallback(() => {
        if (!active) {
            createModal({kind: 'push'}, state)
        }
        if (active) {
            removeFavoriteRequest(likeState.index)
            disableLike()
        }
    }, [active])

    useEffect(() => {
        if (active && (likeState.index >= favorites.length || !isStateResultWiilBeSame(state)(favorites[likeState.index])) ){
            disableLike()
        }
    }, [state])

    // useEffect(() => () => {disableLike()}, [])


    return (
        <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
                <input
                    value={searchRequest}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => setSearchRequest(event.target.value)}
                    placeholder="Что хотите посмотреть?"
                    className={styles.searchBox}
                    type="text"
                    name="search"
                    id="search"
                />
                <div className={styles.likeWrapper}>
                    <Like onClick={clickAction} active={active} className={styles.like}/>
                    {
                        rightNowSetted ? <LikePopUp/> : ""
                    }
                    </div>
                </div>
            <SearchButton onClick={sendSearchRequest}>Найти</SearchButton>
        </div>
  )
}

export default SearchBox