import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LikePopUp.module.scss'
import { ROUTES } from './../../MainContent';

const LikePopUp = () => {
  return (
    <div className={styles.popUp}>
        <div className={styles.caption}>Поиск сохранён в разделе «Избранное»</div>
        <Link to={ROUTES.favorite} className={styles.link}>Перейти в избранное</Link>
    </div>
  )
}

export default LikePopUp