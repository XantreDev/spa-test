import React from 'react'
import styles from './Like.module.scss'

const Like: React.FC<{active?: boolean, className?: string, onClick?: () => void}> = ({active = false, className = '', onClick = () => {}}) => {
    const classStatusClass = active ? styles.active : ''
    return (
    <svg
        onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={`${styles.like} ${classStatusClass} ${className}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#1390E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
      ></path>
    </svg>
  )
}

export default Like