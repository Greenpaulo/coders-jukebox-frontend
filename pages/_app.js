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
    }
  }, [])

  // State
  const [authState, setAuthState] = useState({
    authenticated: false,
    userId: null,
    token: null,
    tokenExpiration: null
  });

  const [userState, setUserState] = useState({
    user: null
  });

  const [videoState, setVideoState] = useState({
    video: null
  });

  const [commentState, setCommentState] = useState({
    comment: null
  });



  // Auth actions

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

      if(res.status !== 200 && res.status !== 201) {
        throw new Error('Login failed!');
      } 

      // .json() is a method from fetch API that auto extracts & parses the res body
      const data = await res.json();

      // Check for errors array in response
      if (data.errors){
        data.errors.map(error => {
          console.log(error.message)
        })
        return
      }

      // Set state with returned auth data
      const { userId, token} = data.data.login;

      setAuthState({...authState, authenticated: true, userId, token});

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

      // Redirect to home page
      Router.push('/');
      
    } catch (err) {
      console.log(err);
    }
  }

  
  // Register a user
  const register = async(firstName, lastName, email, password) => {

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

      if(res.status !== 200 && res.status !== 201) {
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
    // Clear the authState
    setAuthState({
      authData: null
    })
    // Remove token from localStorage
    localStorage.removeItem('token');
  }

  // Data fetching
  const getUserData = async (userId) => {
    console.log('getUserData called with id:', userId)

    // Make a API query to get a token
    const requestBody = {
      query: `
        query {
          user(id:"${userId}") {
            firstName,
            lastName,
            _id,
            ownedVideos {
              thumbnailURL,
              title,
              videoURL
            },
            playlistComments{
              content
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

      const user = (data.data.user);
      return user;

    } catch (err) {
      console.log(err);
    }
    
  }

  
  
  
  
  return (
    <ContextProvider value={{
      authState,
      userState,
      videoState,
      commentState,
      login,
      register,
      logout,
      getUserData
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