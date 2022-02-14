import React from 'react'
import styles from './Input.module.scss'

const Input: React.FC<{data: string, setter: any, label: string}> = ({data, setter, label}) => {

    return ( 
        <div className={styles.input}>
            <label htmlFor={label}>
                {label}
            </label>
            <br/>
            <input 
                type='text'
                onSelect={event => event.preventDefault()} 
                className={`${styles.inputField}`} 
                value={data} 
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => setter(event.target.value)} 
                name="field" id={label}
            />
        </div>
  );
}

export default Input