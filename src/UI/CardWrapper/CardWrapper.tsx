import React from 'react'
import styles from './CardWrapper.module.scss'

const CardWrapper: React.FC<{paddingTop: string, paddingBottom: string, gap: string}> = ({children, gap, paddingTop, paddingBottom}) => {
    return (
    <div style={{gap, paddingTop, paddingBottom}} className={styles.card}>
        {children}
    </div>
  )
}

export default CardWrapper