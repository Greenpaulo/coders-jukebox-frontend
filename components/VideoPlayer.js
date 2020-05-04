import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const VideoPlayer = () => {

  const { videoState } = useContext(GlobalContext);

  const videoSrc = `https://www.youtube.com/embed/${videoState.videoId}?autoplay=1`;

  return (
    <div id="video-container">
      <div id="video-player">
        <iframe width="765" height="472.5" frameBorder="0" allowFullScreen allow="autoplay"src={videoSrc}></iframe>
        {/* <VideoInfo /> */}
        <div id="video-info">
          <h3>{videoState.title}</h3>
        </div>
      </div>
      

  <style jsx>{`
  
    #video-container {
      margin-top: 3rem;
    }
    
    #video-player {
      width: 75%;
      margin: auto;
    }

    #video-info {
      margin-top: 1rem;
    }

  
  
  
  `}</style>




    </div>
  )
}

export default VideoPlayer;