import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
import colors from '../css-variables/colors'

const VideoItem = ({ video, mode }) => {

  
  const { addVideoToPlaylist, removeVideoFromPlaylist, setCurrentVideo, currentUser, profileUser, setAutoplay  } = useContext(GlobalContext);
  
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
    setCurrentVideo(videoToSet);

    setAutoplay(true);

  }

  return (
    <div className="video-item">
      { mode === 'youtube' &&
        <>
          <img src={video.snippet.thumbnails.default.url} alt="youtube video"/>
          <h3 className="video-title">{video.snippet.title}</h3>
          <div id="buttons">
            <button onClick={playButtonHandler}>
              <i className="fa fa-play"></i>
            </button>
            <button onClick={addVideoClickHandler}>
              <i className="fa fa-plus"></i>

            </button>
          </div>
        </>
      }

      { mode === 'playlist' && 
        <>
          <img src={video.thumbnailURL} alt="youtube video" />
          <h3 className="video-title">{video.title}</h3>
          <div id="buttons">
            <button onClick={playButtonHandler}>
              <i className="fa fa-play" aria-hidden="true"></i>
            </button>
            { currentUser.id === profileUser.id &&
              <button onClick={removeVideoClickHandler}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            }
          </div>
        </>
      }

  <style jsx>{`
  
    .video-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* background-color: #e129e8; */
      border-bottom: 1px solid ${colors.primary};
      padding: 1rem;
      /* margin-bottom: 1rem; */
    }

    .video-item:last-child {
      border-bottom: none;
    }

    h3 {
      margin: 0 auto 0 2.7rem;
    }


    button {
      background-color: ${colors.primary};
      color: white;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      margin: 0.5rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.2s ease-in-out, text-shadow 0.2s;
    }

    button:hover {
      background-color: #e5305a;
      text-shadow: 0px 0px 8px rgb(255, 255, 255);
    }

    /* Media queries */
    @media (max-width: 1080px) {
      h3 {
        margin-left: 1.7rem;
      }

      #buttons {
        min-width: 20%;
      }

    }



    @media (max-width: 768px) {
      .video-item {
        text-align: left;
      }
      
      h3 {
        font-size: 0.8rem;
        margin: 0;
        text-align: left;
      }

      #buttons {
        width: 10%;
        min-width: 10%;
        margin-right: 0.5rem;
      }
    }

    @media (max-width: 500px) {
      img {
        height: 60px;
        margin-right: 0.3rem;
      }

      #buttons {
        width: 13%;
        min-width: 13%;
      }
    }

    @media (max-width: 400px) {
      #buttons {
        width: 15%;
        min-width: 15%;
      }

      h3 {
        font-size: 0.7rem;
      }
    }

    @media (max-width: 380px) {
      .video-item {
        padding-left: 0.6rem;
      }
    }

    @media (max-width: 350px) {
      .video-item {
        padding-left: 0.6rem;
      }

      #buttons {
        width: 17%;
        min-width: 17%;
      }

      img {
        height: 40px;
      }
    }
  
  `}</style>

    </div>
  )
}

export default VideoItem;