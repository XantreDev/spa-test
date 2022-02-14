import React, { useState } from 'react'
import logo from "./img/logo.svg"
import Button from '../../UI/Button/Button';
import CardWrapper from '../../UI/CardWrapper/CardWrapper';
import styles from './Login.module.scss'
import Input from '../../UI/Input/Input';
import PasswordInput from '../../UI/Input/PasswordInput';

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  

    return (
    <div>
        <CardWrapper gap='2rem' paddingBottom='6rem' paddingTop='4rem'>
            <img className={styles.logo} src={logo} alt="logo" />
            
            <div className={styles.header}>
                <b>
                    Вход
                </b>
            </div>
            <Input label='Логин' type="text" data={login} setter={setLogin} />
            <PasswordInput label='Пароль' type='password' data={password} setter={setPassword} />
            <Button borderRadius='0.5rem' color='blue' textWidth={'13.6rem'}>Войти</Button>
        </CardWrapper>
    </div>
  )
}

export default Login