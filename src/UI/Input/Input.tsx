import React from 'react'
import styles from './Input.module.scss'

const Input: React.FC<{data: string, setter: any, id: string}> = ({data, setter, id}) => {

    return ( 
        <input 
            type='text'
            onSelect={event => event.preventDefault()} 
            className={`${styles.inputField}`} 
            value={data} 
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => setter(event.target.value)} 
            name="field" id={id}
        />
  );
}

export default Input