import VideoItem from './VideoItem';
import colors from '../css-variables/colors'


const PlayList = ({profileUser}) => {

  return (
    <section id="playlist">

      <div id="playlist-header">
        <h2>Playlist</h2>
      </div>

      {profileUser.ownedVideos.length === 0 && 
        <h2>Add some music to your playlist!</h2>
      }
      
      
      {profileUser.ownedVideos.map(video => (
        // <h3>{video.title}</h3>
        <VideoItem video={video} mode="playlist" key={video.videoURL}/>
      )
      )}


    <style jsx>{`


    
      section#playlist {
        margin: 3rem 0;
        /* padding: 3rem; */
        border: 1px solid black;
        border-radius: 10px;
        color: black;
      }

      #playlist-header {
        /* display: flex; */
        background: ${colors.gradient};
        /* margin: 2rem 0; */
        /* height: 100%; */
        padding: 2rem;
        border-radius: 10px 10px 0 0;
        color: white;
      }
    
    `}</style>
      
    </section>
  )
}

export default PlayList;