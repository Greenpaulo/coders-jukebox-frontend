import gql from 'graphql-tag';
// import


// Action creators
export default {

  login: (email, password) => {

    console.log('login function called from actions')


    // Make a API query to get a token
    const LOGIN_QUERY = gql`
      query LoginQuery{
        login(email: ${email}, password: ${password}) {
          userId,
          token
        }
      }
    `;
    const { data } = useQuery(LOGIN_QUERY);

    // dispatch({
    //   type: 'LOGIN',
    //   payload: {
    //     data
    //   }
    // });
  }
  
}