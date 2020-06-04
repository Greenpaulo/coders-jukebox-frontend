import VideoItem from './VideoItem';


const PlayList = ({profileUser}) => {

  return (
    <section id="playlist">

      <h2>Playlist</h2>

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
        padding: 3rem;
        border: 1px solid black;
        border-radius: 10px;
        color: black;
      }
    
    `}</style>
      
    </section>
  )
}

export default PlayList;