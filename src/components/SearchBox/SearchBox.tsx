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
import { RootState } from '../../state/store';
import { searchState as searchStateType } from '../../state/reducers/searchStateReducer';
import { likeStateType } from '../../state/reducers/likeReducer';
import LikePopUp from '../LikePopUp/LikePopUp';

const SearchBox = () => {
    const [searchRequest, setSearchRequest, sendSearchRequest, state] = useSearch()
    const dispatch = useDispatch()
    const { createModal, deleteFavoriteResult, disableLike } = bindActionCreators(AC, dispatch)
    
    const likeState: likeStateType = useSelector((state: RootState) => state.likeState)
    const [active, rightNowSetted] = [likeState.active, likeState.rightNowSetted]

    // const favorites = useSelector((state: RootState) => (state.favoriteResults as searchStateType[]))
    
    // const [likeStatus, likePopUpStatus] = useMemo(() => {
    //     if (state.executed === false) return [false, false]

    // }, [state.executed, favorites])

    // useMemo(() => {
    //     //     if (state.executed === false) return [false, false]
    
    //     // }, [state.executed, favorites])

    // useEffect(() => {
    //     if (likeStatus === true) {

    //     }
    // }, [state])

    const clickAction = useCallback(() => {
        if (!active) {
            createModal({kind: 'push'}, state)
        }
        if (active) {
            deleteFavoriteResult(likeState.index)
            disableLike()
        }
    }, [active])


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
                {/* TODO: ADD ONCLICK CALLBACK */}
                <Like onClick={clickAction} active={active} className={styles.like}/>
                {
                    rightNowSetted ? <LikePopUp/> : ""
                }
            </div>
            <SearchButton onClick={sendSearchRequest}>Найти</SearchButton>
        </div>
  )
}

export default SearchBox