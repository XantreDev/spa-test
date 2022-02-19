import React from "react";
import styles from "./VideoThumbnail.module.scss";

const VideoThumbnail: React.FC<{ image: string; className?: string }> = ({
    image,
    className = "",
}) => {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className={`${styles.thumbnail} ${className}`}
        ></div>
    );
};

export default VideoThumbnail;
