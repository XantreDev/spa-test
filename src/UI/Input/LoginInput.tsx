import React from "react";
import styles from "./LoginInput.module.scss";
import Input from "./Input";

const LoginInput: React.FC<{ data: string; setter: any; label: string }> = ({
    data,
    setter,
    label,
}) => {
    return (
        <div className={styles.loginInput}>
            <label htmlFor={label}>{label}</label>
            <br />
            <Input data={data} setter={setter} id={label} />
        </div>
    );
};

export default LoginInput;
