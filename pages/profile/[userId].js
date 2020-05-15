import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
// import Router from 'next/router'
import { GlobalContext } from '../../context/GlobalContext';
// import fetch from 'isomorphic-unfetch';

import VideoPlayer from '../../components/VideoPlayer';
import AddToPlaylist from '../../components/AddToPlaylist';
import Playlist from '../../components/PlayList';
import CommentSection from '../../components/CommentSection';
import ProfileEdit from '../../components/ProfileEdit';


const Profile = () => {

  const { currentUser, profileUser, fetchProfileUser, clearProfileUser } = useContext(GlobalContext);

  // Get the userId from the URL and fetch the profile user's data
  const router = useRouter()
  const { userId } = router.query
  fetchProfileUser(userId, true);
  
  
  // useEffect(() => {
    //   return () => clearProfileUser()
    // }, [])
    
    
  //   useEffect(() => {
  //     fetchProfileUser(userId, true);
  //   //   const handleRouteChange = url => {
  //   //     // console.log('App is changing to: ', url)
  //   //     // console.log(Router.query.userId)
  //   // }

  //   // Router.events.on('routeChangeStart', handleRouteChange)
  //   // return () => {
  //   //   Router.events.off('routeChangeStart', handleRouteChange)
  //   // }
  // }, [])

  const [editMode, setEditMode] = useState(false)

  const showProfileEditSection = () => {
    setEditMode(true)
  }


  return (
      <div className="container" id="profile">
        
        <section id="user-info">
          <div>
            <h1>{profileUser.firstName} {profileUser.lastName}</h1>
            <h2>Job Title: {profileUser.jobTitle}</h2>
            <h2>Location: {profileUser.location}</h2>
          </div>
        {profileUser.id === currentUser.id &&
          <button id="profile-edit-btn" onClick={showProfileEditSection}>Edit</button>
        }
        </section>

        {editMode &&
          <ProfileEdit setEditMode={setEditMode}/>
        }

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
            margin-top: 1rem; 
          }
          
          #user-info {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
          }

          #user-info h1 {
            font-size: 2rem;
            margin-bottom: 3rem;
          }
          
          #user-info h2 {
            margin-bottom: 1rem;
          }
          
          button#profile-edit-btn {
            cursor: pointer;
            padding: 0.5rem 0.75rem;
            background: blue;
            color: white;
            border: none;
            border-radius: 5px;
            height: 10%;
          }

          #playlist {
            margin-top: 4rem;
          }
        
        `}</style>

      </div>
  )
}

// Profile.getInitialProps = async (ctx ) => {

//   console.log(ctx.query.token)
  
//   const id = ctx.query.userId
//   // const user = await fetchProfileUser(id, true);

//   // const getUserDataById = async (userId) => {

//   //   const requestBody = {
//   //     query: `
//   //       query {
//   //         userById(id:"${userId}") {
//   //           firstName,
//   //           lastName,
//   //           _id,
//   //           ownedVideos {
//   //             _id,
//   //             thumbnailURL,
//   //             title,
//   //             videoURL
//   //           },
//   //           playlistComments{
//   //             _id,
//   //             content,
//   //             commenter {
//   //               _id
//   //             },
//   //             createdAt,
//   //             updatedAt
//   //           }
//   //         }
//   //       }
//   //     `
//   //   }

//   //   try {
//   //     const res = await fetch('http://localhost:5000/graphql', {
//   //       method: 'POST',
//   //       body: JSON.stringify(requestBody),
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         'Authorization': `Bearer ${authState.token}`
//   //       }
//   //     })

//   //     if (res.status !== 200 && res.status !== 201) {
//   //       throw new Error('Failed to fetch user data');
//   //     }

//   //     // .json() is a method from fetch API that auto extracts & parses the res body
//   //     const data = await res.json();

//   //     // Check for errors array in response
//   //     if (data.errors) {
//   //       data.errors.map(error => {
//   //         console.log(error.message)
//   //       })
//   //       return
//   //     }

//   //     const user = (data.data.userById);
//   //     return user;

//   //   } catch (err) {
//   //     console.log(err);
//   //   }

//   // }

//   // const user = await getUserDataById(id)
//   // console.log(user)
//   return { }
  


export default Profile;