import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderButton.module.scss'

export type buttonType = 'active' | 'inactive' | 'logOut'

const buttonClasses: {[key in buttonType]: string} = {
    'active': styles.buttonActive,
    'inactive': styles.buttonInactive,
    'logOut': styles.buttonLogOut
}


const HeaderButton: React.FC<{type: buttonType, link: string, onClick?: () => void}> = ({children, type, link, onClick = () => {}}) => {
    const buttonClass = buttonClasses[type]

    return (
        <Link onClick={onClick} className={`${styles.button} ${buttonClass}`} to='/'>
            {children}
        </Link>
  )
}

export default HeaderButton