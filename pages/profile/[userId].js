import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
// import Router from 'next/router'
import { GlobalContext } from '../../context/GlobalContext';
// import fetch from 'isomorphic-unfetch';

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