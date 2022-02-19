import React, { CSSProperties } from "react";
import styles from "./Button.module.scss";

type buttonColorType = "blue" | "white";

export type callback = () => void;

const Button: React.FC<{
        children: string;
        color: buttonColorType;
        textWidth?: string | null;
        borderRadius: "0.5rem" | "1rem";
        onClick: callback;
        rightSide?: Boolean;
        customClass?: string | null
    }> = ({
        children,
        color,
        textWidth = null,
        borderRadius,
        onClick,
        rightSide = false,
        customClass = null
    }) => {
    const colorTheme: CSSProperties =
        color === "blue"
            ? { backgroundColor: "#1390E5", color: "#FFFFFF" }
            : { color: "#1390E5", backgroundColor: "#FFFFFF" };
    const rightSideStyle: CSSProperties = rightSide
        ? { borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }
        : {};

    const buttonClass = customClass + ' ' + styles.button
    const divStyle: CSSProperties = textWidth ? {width: textWidth} : {} 

    return (
        <button
            style={{ ...colorTheme, borderRadius, ...rightSideStyle }}
            className={buttonClass}
            type="submit"
            onClick={(event) => {
                event.preventDefault();
                onClick();
            }}
        >
            <div style={divStyle}>{children}</div>
        </button>
    );
};

export default Button;
