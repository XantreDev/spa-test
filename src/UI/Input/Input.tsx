import React from 'react'
import styles from './Input.module.scss'

interface InputProps {
    data: string, 
    setter: any, 
    id: string
    disabled?: boolean,
    placeholder?: string
}

const Input: React.FC<InputProps> = ({data, setter, id, disabled = false, placeholder=''}) => {

    return ( 
        <input 
            type='text'
            placeholder={placeholder}
            disabled={disabled}
            onSelect={event => event.preventDefault()} 
            className={`${styles.inputField}`} 
            value={data} 
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => setter(event.target.value)} 
            name={id} id={id}
        />
  );
}

export default Input