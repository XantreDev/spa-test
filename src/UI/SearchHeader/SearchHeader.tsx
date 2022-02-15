import React from 'react'
import styles from './SearchHeader.module.scss'

const SearchHeader: React.FC<{}> = ({children}) => {
  return (
    <h2 className={styles.header}>{children}</h2>
    )
}

export default SearchHeader