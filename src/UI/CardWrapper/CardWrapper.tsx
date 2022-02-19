import React from "react";
import styles from "./CardWrapper.module.scss";

const CardWrapper: React.FC<{
    className?: string;
    paddingTop: string;
    paddingBottom: string;
    gap: string;
}> = ({ children, gap, paddingTop, paddingBottom, className = "" }) => {
    return (
        <div
            style={{ gap, paddingTop, paddingBottom }}
            className={`${styles.card} ${className}`}
        >
            {children}
        </div>
    );
};

export default CardWrapper;
