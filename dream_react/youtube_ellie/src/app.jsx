import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Video_list from './components/video_list/video_list';
import styles from './app.css';
import Navbar from './components/navbar/navbar';
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {

  const [items,setItems] = useState([]);
  const [selected , setSelected] = useState(undefined);

  useEffect( async() => {

    youtube
    .mostPopular()
    .then(items => setItems(items))

    },[]);

    const getSearch = useCallback( async (query) => {
      await youtube
      .search(query)
      .then(items => setItems(items));

      setSelected(undefined);
    },[items]);

    const getSelected = (item) => {
      setSelected(item);
    }

  return (
    <div className="pane">
      <Navbar getsearch = {getSearch} />

      <section className='content'>
      {selected &&        //2개 묶는거 wrong
        <div className='videodetail'>
         <VideoDetail item={selected}/>
        </div>
        }
        <div className='list'>   
          <Video_list items={items} getselected={getSelected} display={selected? 'list' : 'grid'}/>
        </div>
      </section>

    </div>
  );
}

export default App;






