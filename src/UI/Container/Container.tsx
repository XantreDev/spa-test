import React from 'react'
import styles from './Container.module.scss'

const Container: React.FC<{className?: string}> = ({children, className = ''}) => {

    return (
    <div className={`${styles.container} ${className}`}>{children}</div>
  )
}

export default Container