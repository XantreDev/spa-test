import React, {useState}  from 'react'
import styles from './PasswordInput.module.scss'

import showPasswordDissabled from './svg/show_password.svg'
import showPasswordActive from './svg/show_password_active.svg'
import showParsswordFocus from './svg/show_password_focus.svg'

type InputType = 'password' | 'text'
const PasswordInput: React.FC<{data: string, setter: any, label: string}> = ({data, setter, label}) => {
    const paddingRightForPassword = "4rem";
    const [showPasswordIcon, setShowPasswordIcon] = useState(showPasswordDissabled)
    const [typeOfInput, setTypeOfInput] = useState<InputType>('password')

    const changeType = () =>  {
        if (typeOfInput === 'password'){
            setTypeOfInput(() => 'text')
            setShowPasswordIcon(showPasswordActive)
        }
        else{
            setTypeOfInput(() => 'password')
            setShowPasswordIcon(showPasswordDissabled)
        }
    }
    
    const passwordFocus = () => {
        if (typeOfInput === 'text') {
            setTypeOfInput(() => 'password')
        }
        setShowPasswordIcon(showParsswordFocus)
    }

    return (
        
        <div className={styles.loginInput}>
            <label htmlFor={label}>
                {label}
            </label>
            <br/>
            <input
                style={{paddingRight: paddingRightForPassword}} 
                onSelect={event => event.preventDefault()} 
                className={`${styles.inputField}`} 
                value={data} 
                onInput={(event: React.ChangeEvent<HTMLInputElement>) => setter(event.target.value)} 
                type={typeOfInput} 
                name="field" id={label}
                onFocus={passwordFocus}
                onBlur={_ => setShowPasswordIcon(showPasswordDissabled)}
            />
            <img onClick={changeType} className={styles.showButton}  src={showPasswordIcon} alt=""/>
        </div>
    )
}

export default PasswordInput