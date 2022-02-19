import React from "react";
import styles from "./Header.module.scss";

const Header: React.FC<{}> = ({ children }) => {
    return <h3 className={styles.header}>{children}</h3>;
};

export default Header;
