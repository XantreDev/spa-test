import React from 'react'
import useSearch from '../../hooks/useSearch';
import styles from './SearchBox.module.scss'
import SearchButton from '../../UI/Button/SearchButton';
import Like from '../../UI/Like/Like';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AC } from '../../state';
import { useState } from 'react';

const SearchBox = () => {
    const [searchRequest, setSearchRequest, sendSearchRequest, state] = useSearch()
    const dispatch = useDispatch()
    const { createModal } = bindActionCreators(AC, dispatch)
    
    const [likeStatus, setLikeStatus] = useState(false)

    const createPushModal = () => {
        createModal({kind: 'push'}, state)
        // TODO: Сделать нормальную смену статуса
        setLikeStatus(true)
    }

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
                <Like onClick={createPushModal} active={likeStatus} className={styles.like}/>
            </div>
            <SearchButton onClick={sendSearchRequest}>Найти</SearchButton>
        </div>
  )
}

export default SearchBox