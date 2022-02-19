import React from "react";
import Button, { callback } from "./Button";
import styles from "./SearchButton.module.scss";

const SearchButton: React.FC<{
    children: string;
    onClick: callback;
}> = ({ children, onClick }) => {
    return (
        <Button
            customClass={styles.button}
            color="blue"
            rightSide={true}
            borderRadius="1rem"
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default SearchButton;
