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
import Favourites from '../../components/Favourites';


const Profile = () => {

  const { authState, currentUser, profileUser, fetchProfileUser, clearProfileUser, addFavourite, removeFavourite} = useContext(GlobalContext);

  // Get the userId from the URL and fetch the profile user's data
  const router = useRouter()
  const { userId } = router.query
  fetchProfileUser(userId, true);

  const [isFavourite, setIsFavourite] = useState(false)
  
  
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
  // const [imageString, setImageString] = useState('http://localhost:5000/image/3cae4585ddf4cc55c72b174c0726f266.jpg');

  // if (profilePhoto !== null) {
  //   setImageString(`http://localhost:5000/image/${.filename}`)
  // }
  // console.log(imageString)
  // if (profileUser.profilePhotoFilename !== null) {
  //   const filename = profileUser.profilePhotoFilename;
      
  //   setImageString(`http://localhost:5000/image/${filename}`);
  // }


  // if (profilePhoto !== null){
  //   setImageString(profilePhoto.filename);
  // }
  

  const showProfileEditSection = () => {
    setEditMode(true)
  }

  const addFavouriteHandler = () => {
    addFavourite(userId);
  }

  const removeFavouriteHandler = () => {
    removeFavourite(profileUser.id);
  }


  return (
      <div className="container" id="profile">
        <section id="user">
          <div id="profile-photo">
            {profileUser.profilePhotoFilename !== null && profileUser.profilePhotoFilename !== '' &&
              <img src={`http://localhost:5000/image/${profileUser.profilePhotoFilename}`} alt="profile-photo"/>
            }
          </div>

          <div id="user-info">
            <div id="info">
              <h1>{profileUser.firstName} {profileUser.lastName}</h1>
              <h2>Job Title: {profileUser.jobTitle}</h2>
              <h2>Location: {profileUser.location}</h2>
            </div>

            <div id="buttons">
              {profileUser.id === currentUser.id &&
                <button id="profile-edit-btn" onClick={showProfileEditSection}>Edit</button>
              }
              {profileUser.id !== currentUser.id && !(currentUser.favourites.includes(profileUser.id)) &&  authState.authenticated === true &&
                <button id="add-favourite" onClick={addFavouriteHandler}>Add Favourite</button>
              }
              {currentUser.favourites.includes(profileUser.id) &&
                <button id="remove-favourite" onClick={removeFavouriteHandler}>Remove Favourite</button>
              }
            </div>
          </div>
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

        <Favourites profileUser={profileUser}/>



        <style jsx>{`
                  
          #profile {
            color: white;
          }
          
          section {
            /* padding: 3rem; */
            /* border: 1px solid white; */
            border-radius: 10px;
            margin-top: 1rem; 
          }
          
          #user {
            margin: 2rem 0;
            display: flex;
            justify-content: space-between;
            background: #FF416C;
            background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
            background: linear-gradient(to right, #FF4B2B, #FF416C);
            /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
              0 10px 10px rgba(0,0,0,0.22); */
          }

          #user h1 {
            font-size: 3rem;
            margin: 1rem 0 4rem 0;
          }
          
          #user h2 {
            margin-bottom: 2rem;
          }

          #profile-photo {
            width: 33%;
            background: white;
            padding: 3rem;
            border: 1px solid black;
            border-right: none;
            border-radius: 10px 0 0 10px;
          }

          img {
            width: 50px;
          }

          #user-info {
            /* height: 100%; */
            width: 61%;
            padding: 3rem;
            display: flex;
            justify-content: space-between;
          }
          
          button#profile-edit-btn, button#add-favourite, button#remove-favourite {
            cursor: pointer;
            background: white;
            color: black;
            border: none;
            border-radius: 20px;
            /* height: 10%; */
          }

          #playlist {
            margin-top: 4rem;
          }

          img {
            width: 100%;
            border-radius: 50%;
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