import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
// import Router from 'next/router'
import { GlobalContext } from '../../context/GlobalContext';
// import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';

import ProfileInfo from '../../components/ProfileInfo';
import AboutMe from '../../components/AboutMe';
import VideoPlayer from '../../components/VideoPlayer';
import AddToPlaylist from '../../components/AddToPlaylist';
import Playlist from '../../components/PlayList';
import CommentSection from '../../components/CommentSection';
import ProfileEdit from '../../components/ProfileEdit';
import Favourites from '../../components/Favourites';
import Footer from '../../components/Footer';

const Profile = () => {

  const { authState, currentUser, profileUser, setAutoplay, fetchProfileUser, clearProfileUser, addFavourite, removeFavourite} = useContext(GlobalContext);

  // Get the userId from the URL and fetch the profile user's data
  const router = useRouter()
  const { userId } = router.query
  fetchProfileUser(userId, true);

  useEffect(() => {
      setAutoplay(false);
    }, [])

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div className="container animate__animated animate__fadeIn" id="profile">
        
        <ProfileInfo setEditMode={setEditMode} editMode={editMode} />

        {editMode &&
          <ProfileEdit setEditMode={setEditMode}/>
        }

        <AboutMe profileUser={profileUser}/>

        <VideoPlayer/>

        {profileUser.id === currentUser.id && 
          <AddToPlaylist/> 
        }

        <Playlist profileUser={profileUser}/>

        <CommentSection profileUser={profileUser}/>

        <Favourites profileUser={profileUser}/>

      </div>


        <style jsx>{`
                  
          #profile {
            color: white;
          }
        
        `}</style>

        <Footer />
      </>
  )
}


export default Profile;