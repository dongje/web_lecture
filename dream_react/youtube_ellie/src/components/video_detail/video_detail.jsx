import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import styles from './video_detail.module.css'

function VideoDetail({item:{id} , item:{snippet}}) {


    return (
        <div className={styles.block}>
            <ReactPlayer className={styles.player} width="70%" height="500px"
            url={"https://www.youtube.com/watch?v=" + id} playing controls/>

        <div className={styles.texts}>
            <h4>{snippet.title}</h4>
            <h5>{snippet.channelTitle}</h5>
            <p>{snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;