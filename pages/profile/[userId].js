import { useContext, useState } from 'react';
import { useRouter } from 'next/router'
import { GlobalContext } from '../../context/GlobalContext';

import VideoPlayer from '../../components/VideoPlayer';
import AddToPlaylist from '../../components/AddToPlaylist';
import VideoItem from '../../components/VideoItem';


const Profile = () => {

  // Local state holding the current profiles user data
  const [ profileUser, setProfileUser ] = useState({
    id: '',
    firstName: '',
    lastName: '',
    ownedVideos: [],
    userComments: [],
    playlistComments: []
  })

  const { getUserDataById, currentUser } = useContext(GlobalContext);
  
  // Get the userId from the URL
  const router = useRouter()
  const { userId } = router.query

  const fetchProfileUser = async () => {

    // Only fetch data if profileUser isn't populated
    if(profileUser.firstName !== ''){
      return
    }
    // Only fetch data if the userId has been parsed from the URL
    if(userId === undefined){
      return
    }
    // Get the profile user's data using the userId from the URL
    const user = await getUserDataById(userId);
    
    // Set the local state
    setProfileUser({
      id: userId,
      firstName: user.firstName,
      lastName: user.lastName,
      ownedVideos: user.ownedVideos,
      userComments: user.userComments,
      playlistComments: user.playlistComments
    })
  }
  fetchProfileUser();



  return (
      <div className="container" id="profile">
        <section id="user-info">
          <h1>{profileUser.firstName} {profileUser.lastName}</h1>
          <h2>Job Title: </h2>
          <h2>Location: </h2>
        </section>

        <VideoPlayer />

        {profileUser.id === currentUser.id && 
         <AddToPlaylist/> 
        }

        <section id="playlist">
          <h2>Playlist</h2>
          {/* {data.user.ownedVideos.map(video => (
            <VideoItem video={video} />
          ))} */}
        </section>

        {/* {renderAddToPlayList} */}



        <style jsx>{`
        
          
          #profile {
            color: white;
          }
          
          section {
            padding: 3rem;
            border: 1px solid white;
            border-radius: 10px; 
          }
          
          #user-info {
            margin-top: 1rem;
            
          }

          #user-info h1 {
            font-size: 2rem;
            margin-bottom: 3rem;
          }
          
          #user-info h2 {
            margin-bottom: 1rem;
          }
          

          #playlist {
            margin-top: 4rem;
          }
        
        `}</style>

      </div>
  )
}

// Profile.getInitialProps

export default Profile;