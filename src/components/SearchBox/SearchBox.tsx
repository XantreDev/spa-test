import React from 'react'
import useSearch from '../../hooks/useSearch';
import styles from './SearchBox.module.scss'
import SearchButton from '../../UI/Button/SearchButton';
import Like from '../../UI/Like/Like';

const SearchBox = () => {
    const [searchRequest, setSearchRequest, sendSearchRequest] = useSearch()

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
                <Like onClick={() => {}} className={styles.like}/>
            </div>
            <SearchButton onClick={sendSearchRequest}>Найти</SearchButton>
        </div>
  )
}

export default SearchBox