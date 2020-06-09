import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const VideoPlayer = () => {

  const { videoState } = useContext(GlobalContext);

  // Autoplay on
  // const videoSrc = `https://www.youtube.com/embed/${videoState.videoId}?autoplay=1`;
  
  // Autoplay off
  const videoSrc = `https://www.youtube.com/embed/${videoState.videoId}`;

  return (

    <div id="video-container">
      <div id="video-player">
        <iframe width="918" height="567" frameBorder="0" allowFullScreen allow="autoplay" src={videoSrc}></iframe>
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
      width: 85%;
      margin: 4rem auto;
      padding: 1rem;
    }

    #video-info {
      margin-top: 1rem;
    }

  
  
  
  `}</style>




    </div>
  )
}

export default VideoPlayer;