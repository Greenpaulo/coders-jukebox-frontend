import ContextProvider from '../context/ContextProvider';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import cookie from 'react-cookies';

const App = ({ Component, pageProps }) => {

  let token = null;

  useEffect(() => {
    // Check for token in local storage once the component mounts - i.e. code is now run in the browser (instead of on the server)
    token = localStorage.getItem('token');
    if (token) {
      setAuthState({...authState, authenticated: true, token: token});
      
      // Get the logged in user's data
      getUserDataByToken(token)

      //Get all users - for the searchbar user search
      getAllUsers();
    }
  }, [])


  // State
  const [authState, setAuthState] = useState({
    authenticated: false,
    userId: null,
    token: null,
    tokenExpiration: null
  });

  // Logged in User's Data
  const [currentUser, setCurrentUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    location: '',
    ownedVideos: [],
    userComments: [],
    playlistComments: []
  });

  // Current profiles user data
  const [profileUser, setProfileUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    jobTitle: '',
    location: '',
    ownedVideos: [],
    userComments: [],
    playlistComments: []
  });

  const [videoState, setVideoState] = useState({
    title: '',
    // description:'',
    videoId: ''
  });

  const [commentState, setCommentState] = useState({
    comment: null
  });

  const [allUsers, setAllUsers] = useState([]);


  // AUTHENTICATION *******************************************************************
  
  // Login a user
  const login = async (email, password) => {

    // Make a API query to get a token
    const requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId,
            token
          }
        }
      `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Login failed!');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // Set state with returned auth data
      const { userId, token } = data.data.login;

      setAuthState({ ...authState, authenticated: true, userId, token });

      // Save token to local storage
      localStorage.setItem('token', token)

      // // Set token as a cookie
      // cookie.save(
      //   'userId',
      //   userId,
      //   {
      //     path: '/',
      //     // expires,
      //     maxAge: 1000,
      //     domain: 'http://localhost:3000',
      //     secure: false,
      //     httpOnly: false
      //   }
      // )

      // Fetch the user data and set currentUser state
      await getUserDataByToken(token);

      // Redirect to user's profile page
      Router.push(`/profile/${userId}`);

    } catch (err) {
      console.log(err);
    }
  }


  // Register a user
  const register = async (firstName, lastName, email, password) => {

    // Make a API query to get a token
    const requestBody = {
      query: `
      mutation {
        createUser(userInput: {firstName: "${firstName}", lastName: "${lastName}", email: "${email}", password: "${password}"}) {
          email
        }
      }
    `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Account creation failed!');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      const newUserEmail = (data.data.createUser.email);
      return newUserEmail;

      // Flip the form to Sign In and prefill the email input with the email just used

      // ***** TODO ***********


    } catch (err) {
      console.log(err);
    }

  }

  // Logout a user
  const logout = () => {
    // Redirect to home page
    Router.push('/');
    // Clear the authState
    setAuthState({
      authData: null
    })
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Clear the current user
    setCurrentUser({
      id: '',
      firstName: '',
      lastName: '',
      ownedVideos: [],
      userComments: [],
      playlistComments: []
    });

    setProfileUser({
      id: '',
      firstName: '',
      lastName: '',
      ownedVideos: [],
      userComments: [],
      playlistComments: []
    });
    
    // Redirect to home page
    // Router.push('/');
    // console.log('currentUser', currentUser);
    // console.log('profileUser', profileUser);
  }

  // USER *****************************************************************************
  const updateUser = async (firstName, lastName, jobTitle, location) => {
    
    // Make a API query to get a token
    const requestBody = {
      query: `
      mutation {
        updateUser(profileInput: {firstName: "${firstName}", lastName: "${lastName}", jobTitle: "${jobTitle}", location: "${location}"}) {
          firstName,
          lastName,
          jobTitle,
          location
        }
      }
    `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('User update failed!');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // const newUserEmail = (data.data.createUser.email);
      console.log(data.data)
      // return newUserEmail;

    } catch (err) {
      console.log(err);
    }
  }


  // DATA FETCHING *******************************************************************

  const getAllUsers = async () => {

    const requestBody = {
      query: `
        query {
          users {
            _id,
            firstName,
            lastName
          }
        }
      `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to fetch user data');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      const users = (data.data.users);

      // Get full name for use in searchbar
      const usersWithFullName = users.map(user => {
        return {
          id: user._id,
          name: user.firstName + ' ' + user.lastName
        }
      })

      setAllUsers(usersWithFullName);

    } catch (err) {
      console.log(err);
    }

  }
  
  
  const getUserDataById = async (userId) => {
    // console.log('getUserData called with id:', userId)

    const requestBody = {
      query: `
        query {
          userById(id:"${userId}") {
            firstName,
            lastName,
            jobTitle,
            location,
            _id,
            ownedVideos {
              _id,
              thumbnailURL,
              title,
              videoURL
            },
            playlistComments{
              _id,
              content,
              commenter {
                _id
              },
              createdAt,
              updatedAt
            }
          }
        }
      `
    }


    // console.log(requestBody)
    // console.log(authState.token)

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to fetch user data');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      const user = (data.data.userById);
      return user;

    } catch (err) {
      console.log(err);
    }

  }
  
  
  // Get logged in user's data and sets it in the userState
  const getUserDataByToken = async (token) => {

    // console.log('called')

    let requestBody;

    // If no userId then query the current logged in user by token
    requestBody = {
      query: `
        query {
          userByToken{
            firstName,
            lastName,
            jobTitle,
            location,
            _id,
            ownedVideos {
              _id,
              title,
              thumbnailURL,
              videoURL
            },
            playlistComments{
              _id,
              content,
              commenter {
              _id 
              },  
              createdAt,
              updatedAt
            }
          }
        }
      `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to fetch user data');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      const user = data.data.userByToken;
      // console.log(user.firstName)
      // console.log(user);
      
      setCurrentUser({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        jobTitle: user.jobTitle,
        location: user.location,
        ownedVideos: user.ownedVideos,
        userComments: user.userComments,
        playlistComments: user.playlistComments
      })  

    } catch (err) {
      console.log(err);
    }
    
  }


  const fetchProfileUser = async (userId, initialFetch) => {

    if (initialFetch === true) {
      // Only fetch data if profileUser isn't populated
      if (profileUser.firstName !== '') {
        return
      }
      // Only fetch data if the userId has been parsed from the URL
      if (userId === undefined) {
        return
      }
    }
    // Get the profile user's data using the userId from the URL
    const user = await getUserDataById(userId);

    // Set the state
    setProfileUser({
      id: userId,
      firstName: user.firstName,
      lastName: user.lastName,
      jobTitle: user.jobTitle,
      location: user.location,
      ownedVideos: user.ownedVideos,
      userComments: user.userComments,
      playlistComments: user.playlistComments
    })

    //Set video state to be first video in profile user's playlist
    if (user.ownedVideos.length > 0){
      const video = user.ownedVideos[0]
      setCurrentVideo({
        title: video.title,
        videoId: video.videoURL
      })
    }

    return user;
  }

  // Reset the ProfileUser state
  const clearProfileUser = () => {
    setProfileUser({
      id: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      location: '',
      ownedVideos: [],
      userComments: [],
      playlistComments: []
    });
  }

  const getCommentUser = async (userId) => {
    const commentUser = await getUserDataById(userId);
    return commentUser;
  }





  // VIDEOS **************************************************************************


  // Add a video to a user's playlist
  const addVideoToPlaylist = async (video) => {

    // Send an API request to save the video
    const requestBody = {
      query: `
        mutation {
          createVideo(videoInput: {title: "${video.title}", thumbnailURL: "${video.thumbnailURL}", videoURL: "${video.videoId}", userId: "${currentUser.id}"}) {
            _id
          }
        }
      `
    }

    // console.log(requestBody)
    // console.log(authState.token)

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to create video!');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // Refresh the profile with the new user data - to update the playlist
      fetchProfileUser(currentUser.id, false)

    } catch (err) {
      console.log(err);
    }
  }


  // Remove a video from a user's playlist
  const removeVideoFromPlaylist = async (id) => {

  // Send an API request to save the video
    const requestBody = {
      query: `
        mutation {
          removeVideo(id: "${id}") {
            ownedVideos {
              _id,
              thumbnailURL,
              title,
              videoURL
            }
          }
        }
      `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to remove video!');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      console.log(data.data.removeVideo)

      const videos = data.data.removeVideo.ownedVideos;
      console.log(videos);

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // Refresh the profile with the new user data - to update the playlist
      updateProfileUserVideos(videos)

    } catch (err) {
      console.log(err);
    }
  }

  const updateProfileUserVideos = (videos) => {
    // Update the profile user's ownedVideo in th global state
    setProfileUser({...profileUser, ownedVideos: videos}) 
  }

  // Set a video as the current video for the video player
  const setCurrentVideo = (video) => {
    setVideoState({
      title: video.title,
      // description: video.description,
      videoId: video.videoId
    })
  }


  
  
  // COMMENTS ***********************************************************************

  // Add a comment
  const addComment = async (content) => {

    // Send an API request to save the comment
    const requestBody = {
      query: `
        mutation {
          createComment(commentInput: {content: "${content}", commenterId: "${currentUser.id}", playlistOwnerId: "${profileUser.id}"}) {
            _id
          }
        }
      `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to create comment!');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // Refresh the profile with the new user data - to update the comment section
      fetchProfileUser(profileUser.id, false)

    } catch (err) {
      console.log(err);
    }
  }

  
  // Remove a video from a user's playlist
  const removeCommentFromPlaylist = async (id) => {

    // Send an API request to delete the comment
    const requestBody = {
      query: `
        mutation {
          removeComment(id: "${id}", playlistOwnerId: "${profileUser.id}") {
            playlistComments{
              _id,
              content,
              commenter {
                _id
              },
              createdAt,
              updatedAt
            }
          }
        }
      `
    }

    try {
      const res = await fetch('http://localhost:5000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authState.token}`
        }
      })

      if (res.status !== 200 && res.status !== 201) {
        throw new Error('Failed to remove comment!');
      }

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      console.log(data)

      const comments = data.data.removeComment.playlistComments;

      // Check for errors array in response
      if (data.errors) {
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // Refresh the profile with the new user data - to update the playlist
      updateProfileUserComments(comments);

    } catch (err) {
      console.log(err);
    }
  }

  const updateProfileUserComments = (comments) => {
    // Update the profile user's playlistComments in th global state
    setProfileUser({ ...profileUser, playlistComments: comments })
  }

  
  


  
  
  
  
  return (
    <ContextProvider value={{
      authState,
      currentUser,
      profileUser,
      setProfileUser,
      videoState,
      commentState,
      allUsers,
      login,
      register,
      logout,
      updateUser,
      getUserDataById,
      getUserDataByToken,
      fetchProfileUser,
      getCommentUser,
      addVideoToPlaylist,
      clearProfileUser,
      removeVideoFromPlaylist,
      setCurrentVideo,
      addComment,
      removeCommentFromPlaylist
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}


// App.getInitialProps = async context => {

//   const res = await fetch('path/to/endpoint', {
//     headers: {
//       cookie: ctx.req.headers.cookie,
//     },
//   });
//   const user = await res.json();

//   return { user };
  
  // const token = cookie.load('token');
  // console.log('token from cookie', token);
  
  // // if (token) {
  // //   setAuthState({ ...authState, authenticated: true, token: token}); 
  // // }
  // return {token : token};
// }




export default App;