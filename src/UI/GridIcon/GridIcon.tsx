import React from "react";

const GridIcon: React.FC<{ active: boolean; onClick: any }> = ({
    active,
    onClick,
}) => {
    return (
        <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            opacity={active ? 1 : 0.3}
        >
            <path
                stroke="#272727"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 5H5v5h5V5zM19 5h-5v5h5V5zM19 14h-5v5h5v-5zM10 14H5v5h5v-5z"
            ></path>
        </svg>
    );
};

export default GridIcon;
