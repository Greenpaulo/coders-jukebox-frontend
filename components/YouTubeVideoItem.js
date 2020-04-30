import { GlobalContext } from '../context/GlobalContext';
import {useContext} from 'react';

const YouTubeVideoItem = ({video}) => {

  const { addVideoToPlaylist } = useContext(GlobalContext);

  const addVideoClickHandler = () => {

    const videoToSave = {
      title: video.snippet.title,
      thumbnailURL: video.snippet.thumbnails.default.url,
      videoURL: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    }
    addVideoToPlaylist(videoToSave);
  }

  // console.log(video.snippet.thumbnails.title);

  return (
    <div className="video-item">
      <img src={video.snippet.thumbnails.default.url} alt="youtube video"/>
      <h3 className="video-title">{video.snippet.title}</h3>
      <div id="buttons">
        <button>Play</button>
        <button onClick={addVideoClickHandler}>Add To Playlist</button>
      </div>

  <style jsx>{`
  
    .video-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* background-color: #e129e8; */
      border-bottom: 1px solid white;
      padding: 1rem;
      margin: 1rem 0;
    }

    button {
      background-color: #5e00ff;
      color: white;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      margin: 0.5rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
  
  `}</style>

    </div>
  )
}

export default YouTubeVideoItem;