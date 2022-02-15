import React from 'react'
import styles from './Header.module.scss'
import Navigation from './Navigation/Navigation';
import Exit from './Exit/Exit';
import Container from '../../UI/Container/Container';

const Header = () => {
  return (
    <header className={styles.header}>
        <Container className={styles.align}>
            <Navigation/>
            <Exit/>
        </Container>
    </header>
  )
}

export default Header