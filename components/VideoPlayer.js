import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';
import colors from '../css-variables/colors'

const VideoPlayer = () => {

  const { videoState, autoplay, profileUser } = useContext(GlobalContext);

  // Autoplay off
  let videoSrc = `https://www.youtube.com/embed/${videoState.videoId}`;

  if (autoplay) {
    // Autoplay on
    videoSrc = `https://www.youtube.com/embed/${videoState.videoId}?autoplay=1`;
  }

  return (

    <div id="video-container">
      {profileUser.ownedVideos.length > 0 && 
        <div id="video-player">
          <iframe width="918" height="567" frameBorder="0" allowFullScreen allow="autoplay" src={videoSrc}></iframe>
          {/* <VideoInfo /> */}
          {/* <div id="video-info">
            <h3>{videoState.title}</h3>
          </div> */}
        </div>
      }
      

  <style jsx>{`
  
    #video-container {
      margin-top: 3rem;
    }
    
    #video-player {
      width: 85%;
      margin: 4rem auto;
      padding: 1rem;
    }

    #video-info {
      margin-top: 1rem;
      text-align: center;
    }
/* 
    h3 {
      width: 80%;
      margin: auto;
    } */

  
  
  
  `}</style>




    </div>
  )
}

export default VideoPlayer;