import React from 'react'

const Logo: React.FC<{size: string, className?: string}> = ({size = '8.8rem', className=''}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      className={className}
      viewBox="0 0 88 88"
    >
      <path
        fill="#1390E5"
        fillRule="evenodd"
        d="M59.149 43.567L24.683 60.956v18.443l34.466-17.39V43.568z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#1180CB"
        fillRule="evenodd"
        d="M24.683 26.179L59.15 43.568V62.01l-34.466-17.39V26.18z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#35A2EC"
        fillRule="evenodd"
        d="M59.149 8.79L24.683 26.18v18.443l34.466-17.39V8.792z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Logo