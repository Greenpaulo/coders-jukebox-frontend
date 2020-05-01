import VideoItem from './VideoItem';


const PlayList = ({profileUser}) => {

  // console.log(profileUser.ownedVideos)

  return (
    <section id="playlist">

      {profileUser.ownedVideos.length === 0 && 
        <h2>Add some music to your playlist!</h2>
      }
      
      
      {profileUser.ownedVideos.map(video => (
        // <h3>{video.title}</h3>
        <VideoItem video={video} mode="playlist" key={video.videoURL}/>
      )
      )}


    <style jsx>{`
    
      section {
        margin-top: 3rem;
        padding: 3rem;
        border: 1px solid white;
        border-radius: 10px; 
      }
    
    `}</style>
      
    </section>
  )
}

export default PlayList;