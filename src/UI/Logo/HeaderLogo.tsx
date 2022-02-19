import React from "react";
import Logo from "./Logo";
import styles from "./HeaderLogo.module.scss";

const HeaderLogo: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <Logo size="4.8rem" className={styles.headerLogo} onClick={onClick} />
    );
};

export default HeaderLogo;
