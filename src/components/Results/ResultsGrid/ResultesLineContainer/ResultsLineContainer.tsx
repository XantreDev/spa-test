import React from 'react'
import styles from './ResultesLineContainer.module.scss'

const ResultsLineContainer: React.FC<{}> = ({children}) => {
  return (
    <div
        className={styles.container}
    >{children}</div>
  )
}

export default ResultsLineContainer