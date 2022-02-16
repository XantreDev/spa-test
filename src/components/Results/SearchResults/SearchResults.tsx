import React, { useState } from 'react'
import FilterPanel from '../FilterPanel/FilterPanel';
import ResultsGrid from '../ResultsGrid/ResultsGrid';
import ShowSelector from '../ShowSelector/ShowSelector';
import styles from './SearchResults.module.scss'

export type viewType = 'cards' | 'list'
const SearchResults = () => {
    const [showType, setShowType] = useState<viewType>('cards')

    return (
    <div className={styles.container}>
        <FilterPanel selected={showType} setter={setShowType}/>
        <ResultsGrid type={showType}/>
    </div>
  )
}

export default SearchResults