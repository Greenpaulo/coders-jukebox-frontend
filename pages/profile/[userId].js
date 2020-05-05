import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import Router from 'next/router'
import { GlobalContext } from '../../context/GlobalContext';

import VideoPlayer from '../../components/VideoPlayer';
import AddToPlaylist from '../../components/AddToPlaylist';
import Playlist from '../../components/PlayList';
import CommentSection from '../../components/CommentSection';


const Profile = () => {

  const { currentUser, profileUser, fetchProfileUser, clearProfileUser } = useContext(GlobalContext);

  // console.log('profile page read');

  // console.log('profileUser', profileUser)
  
  // Get the userId from the URL and fetch the profile user's data
  const router = useRouter()
  const { userId } = router.query
  fetchProfileUser(userId, true);
  
  // useEffect(() => {
    //   return () => clearProfileUser()
    // }, [])
    
    
  //   useEffect(() => {
  //     const handleRouteChange = url => {
  //       // console.log('App is changing to: ', url)
  //       // console.log(Router.query.userId)
  //       fetchProfileUser(Router.queryuserId, true);
  //   }

  //   Router.events.on('routeChangeStart', handleRouteChange)
  //   return () => {
  //     Router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [])


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

        <Playlist profileUser={profileUser}/>

        <CommentSection profileUser={profileUser}/>



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