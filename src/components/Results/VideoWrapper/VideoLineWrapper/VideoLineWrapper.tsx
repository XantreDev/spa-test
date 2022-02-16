import React from 'react'
import VideoThumbnail from '../../../../UI/VideoThumbnail/VideoThumbnail'
import { cardData } from '../VideoWrapper'
import styles from './VideoLineWrapper.module.scss'

const VideoLineWrapper: React.FC<cardData> = ({image, channelTitle, url, title, viewsCountCaption}) => {
  return (
    <a href={url} className={styles.line}>
        <VideoThumbnail className={styles.thumbnail} image={image}/>
        <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <div className={styles.additionalInfo}>
                <div className={styles.channelName}>{channelTitle}</div>
                <div className={styles.viewsCount}>{viewsCountCaption}</div>
            </div>
        </div>
    </a>
  )
}

export default VideoLineWrapper