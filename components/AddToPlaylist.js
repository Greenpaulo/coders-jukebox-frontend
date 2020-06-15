import { useState } from 'react'
import SearchBar from './Searchbar';
import { youtube, KEY } from '../apis/youtube';
import VideoItem from './VideoItem';
import colors from '../css-variables/colors';

const AddToPlaylist = () => {

  const [videos, setVideos] = useState([]);

  const searchVideoHandler = async (searchInput) => {
    const res = await youtube.get('/search', {
        params: {
          type: 'video',
          part: 'snippet',
          maxResults: 5,
          key: KEY,
          q: searchInput
        }
      })

    const videoList = res.data.items;
    setVideos(videoList);
  }


  return (
    <section id="addToPlaylist">
      <div id="header">
        <h2>Add To Playlist</h2>
        <SearchBar placeholder='Search for music' searchMode="video" submitHandler={searchVideoHandler}/>
      </div>


      <div id="videos">
        { videos.length === 0 &&
          <h3>Search for music to add to your playlist!</h3>
        }
        {videos.map(video => {
          return (
            <VideoItem video={video} mode="youtube" key={video.id.videoId}/>
          )
        })}
      </div>

  <style jsx>{`

    section {
      margin: 0 auto 3rem auto;
      width: 84%;
      /* padding: 3rem; */
      /* border: 1px solid black; */
      border-radius: 10px;
      color: white;
    }
  
    #header {
      display: flex;
      background: ${colors.gradient};
      /* margin: 2rem 0; */
      /* height: 100%; */
      padding: 2rem;
      border-radius: 10px 10px 0 0;
    }

    h2 {
      color: white;
      margin-right: 7rem;
      width: 25%;
    }

    #videos {
      /* padding: 1rem; */
      border: 1px solid ${colors.primary};
      border-radius: 0 0 10px 10px;
      border-top: none;
    }

    h3 {
      padding: 2rem;
    }
  
  `}</style>



    </section>
  )
}

export default AddToPlaylist;