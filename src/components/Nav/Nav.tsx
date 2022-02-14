import React from 'react'
import styles from './Nav.module.scss'
import Navigation from './Navigation/Navigation';
import Exit from './Exit/Exit';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <Navigation/>
            <Exit/>
        </div>
    </header>
  )
}

export default Header