import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import CardWrapper from "../../UI/CardWrapper/CardWrapper";
import styles from "./Login.module.scss";
import Input from "../../UI/Input/Input";
import PasswordInput from "../../UI/Input/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AC } from "../../state";
import { AuthService } from "../../Services/AuthService";
import Logo from '../../UI/Logo/Logo';
import LoginInput from "../../UI/Input/LoginInput";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch()
    const { getAuth } = bindActionCreators(AC, dispatch)

    const tryProcess = _ => {
        AuthService.tryAuth(login, password, getAuth)
    }

    return (
        <div>
            <CardWrapper gap="2rem" paddingBottom="6rem" paddingTop="4rem">
                <Logo/>

                <div className={styles.header}>
                    <b>Вход</b>
                </div>
                <LoginInput
                    label="Логин"
                    type="text"
                    data={login}
                    setter={setLogin}
                />
                <PasswordInput
                    label="Пароль"
                    type="password"
                    data={password}
                    setter={setPassword}
                />
                <Button
                    borderRadius="0.5rem"
                    color="blue"
                    textWidth={"13.6rem"}
                    onClick={tryProcess}
                >
                    Войти
                </Button>
            </CardWrapper>
        </div>
    );
};

export default Login;
