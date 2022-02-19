import React from "react";
import VideoThumbnail from "../../../../UI/VideoThumbnail/VideoThumbnail";
import { cardData } from "../VideoWrapper";
import styles from "./VideoCardWrapper.module.scss";

const VideoCardWrapper: React.FC<cardData> = ({
    image,
    title,
    channelTitle,
    viewsCountCaption,
    url,
}) => {
    return (
        <a className={styles.card} href={url}>
            <VideoThumbnail className={styles.thumbnail} image={image} />

            <div className={styles.title}>{title}</div>
            <div className={styles.additionalInfo}>
                <div className={styles.channelName}>{channelTitle}</div>
                <div className={styles.viewsCount}>{viewsCountCaption}</div>
            </div>
        </a>
    );
};

export default VideoCardWrapper;
