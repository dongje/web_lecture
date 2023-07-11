import React, { memo, useEffect, useState } from 'react';
import styles from './video.module.css';

const Video_item = memo( ({item,item:{snippet} , getselected , display}) => {

    const displayType = display === 'list' ? styles.list : styles.grid;

    return (
        <li className={`${styles.block} ${displayType}`}>
        <img className={styles.thumbnail} src={snippet.thumbnails.default.url} onClick={() => getselected(item)} alt=""/>
            <div className={styles.text}>
            <h4 className={styles.title} onClick={() => getselected(item)}>{snippet.title}</h4>
            <h5 className={styles.channel}>{snippet.channelTitle}</h5>
            </div>
        </li>
    );
});

export default Video_item;

