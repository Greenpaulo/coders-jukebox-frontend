import VideoInfo from './VideoInfo';
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

const VideoPlayer = () => {

  const { videoState } = useContext(GlobalContext);

  return (
    <div>
      <h2>Video Player</h2>
      <VideoInfo />
    </div>
  )
}

export default VideoPlayer;