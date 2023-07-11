import React, { memo, useEffect } from 'react';
import Video_item from '../video_item/video_item';
import styles from './list.module.css';

const Video_list = memo(({items,getselected,display}) => {


    return (
        <ul className={styles.itemlist}>
            {items.map(item => <Video_item key={item.id} item={item} getselected={getselected} display={display}/>)}
        </ul>
    );
});

export default Video_list


