// import { GlobalProvider } from '../context/GlobalState';
import { GlobalContext, GlobalProvider } from '../context/GlobalState';
// import { login } from '../context/Actions';
// import { login } from '../context/Actions';
import Layout from '../components/Layout';
import { useState } from 'react';



function MyApp({ Component, pageProps }) {

  const [authState, setAuthState] = useState({
    authenticated: false,
    authData: null
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
  const login = (email, password) => {

    console.log('login function called from actions');
    setState({...state, authenticated: !state.authenticated});
    console.log(state.authenticated);


    // Make a API query to get a token
    // const LOGIN_QUERY = gql`
    //   query LoginQuery{
    //     login(email: ${email}, password: ${password}) {
    //       userId,
    //       token
    //     }
    //   }
    // `;
    // const { data } = useQuery(LOGIN_QUERY);

  }

  

  
  
  
  return (
    <GlobalContext.Provider value={{
      // login: actions.login
      login
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

export default MyApp