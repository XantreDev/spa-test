import React from 'react'

const ListIcon: React.FC<{active: boolean, onClick: any}> = ({active, onClick}) => {
  return (
        <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        opacity={active ? 1 : .3}
        viewBox="0 0 24 24"
    >
        <path
        stroke="#272727"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
        ></path>
    </svg>
  )
}

export default ListIcon