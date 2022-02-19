import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderButton.module.scss";

export type buttonStatusType = "active" | "inactive" | "noStatus";
export type buttonType = "search" | "favorite" | "logOut";

const buttonStatusClasses: { [key in buttonStatusType]: string } = {
    active: styles.buttonActive,
    inactive: styles.buttonInactive,
    noStatus: "",
};

const buttonClasses: { [key in buttonType]: string } = {
    search: styles.search,
    logOut: styles.buttonLogOut,
    favorite: "",
};

const HeaderButton: React.FC<{
    statusType?: buttonStatusType;
    link: string;
    onClick?: () => void;
    type: buttonType;
}> = ({
    type,
    children,
    statusType = "noStatus",
    link,
    onClick = () => {},
}) => {
    const buttonStatusClass = buttonStatusClasses[statusType];
    const buttonTypeClass = buttonClasses[type];

    return (
        <Link
            onClick={onClick}
            className={`${styles.button} ${buttonStatusClass} ${buttonTypeClass}`}
            to={link}
        >
            {children}
        </Link>
    );
};

export default HeaderButton;
