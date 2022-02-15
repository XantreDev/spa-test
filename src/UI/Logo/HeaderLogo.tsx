import React from 'react'
import Logo from './Logo';
import styles from './HeaderLogo.module.scss'

const HeaderLogo = () => {
  return (
    <Logo size='4.8rem' className={styles.headerLogo}/>
  )
}

export default HeaderLogo