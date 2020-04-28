import { useContext, useState } from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router'
import { GlobalContext } from '../../context/GlobalContext';

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

  const context = useContext(GlobalContext);
  
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
    const user = await context.getUserDataById(userId);
    
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
      <div className="container">
        <section id="user-info">
          <h2>{profileUser.firstName} {profileUser.lastName}</h2>
        </section>

        <section id="playlist">
          <h2>Playlist</h2>
          {/* {data.user.ownedVideos.map(video => (
            <VideoItem video={video} />
          ))} */}
        </section>

        {/* {renderAddToPlayList} */}



        <style jsx>{`
        
          #user-info {
            margin-top: 1rem
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