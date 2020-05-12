import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const VideoItem = ({video, mode}) => {

  const { addVideoToPlaylist, removeVideoFromPlaylist, setCurrentVideo } = useContext(GlobalContext);

  const addVideoClickHandler = () => {

    const videoToSave = {
      title: video.snippet.title,
      thumbnailURL: video.snippet.thumbnails.default.url,
      videoId: video.id.videoId,
    }
    addVideoToPlaylist(videoToSave);
  }

  const removeVideoClickHandler = () => {
    removeVideoFromPlaylist(video._id);
  }

  const playButtonHandler = () => {

    let videoToSet;

    if (mode === 'youtube') {
      videoToSet = {
        title: video.snippet.title,
        // description: video.snippet.description,
        videoId: video.id.videoId,
      }
    } else {
      videoToSet = {
        title: video.title,
        // description: video.description,
        videoId: video.videoURL,
      }
    }
    console.log(videoToSet);
    setCurrentVideo(videoToSet);
  }


  return (
    <div className="video-item">
      { mode === 'youtube' &&
        <>
          <img src={video.snippet.thumbnails.default.url} alt="youtube video"/>
          <h3 className="video-title">{video.snippet.title}</h3>
          <div id="buttons">
            <button onClick={playButtonHandler}>Play</button>
            <button onClick={addVideoClickHandler}>Add To Playlist</button>
          </div>
        </>
      }

      { mode === 'playlist' && 
        <>
          <img src={video.thumbnailURL} alt="youtube video" />
          <h3 className="video-title">{video.title}</h3>
          <div id="buttons">
            <button onClick={playButtonHandler}>Play</button>
            <button onClick={removeVideoClickHandler}>X</button>
          </div>
        </>
      }

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

export default VideoItem;