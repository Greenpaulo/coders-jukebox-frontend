import { createContext, useReducer} from 'react';
// import AppReducer from './AppReducer';
// import { useQuery } from '@apollo/react-hooks';

// Inital State
const initialState = {
  authenticated: false,
  authData: null,
  user: null,
  video: null,
  comment: null,
  // login: () => {}
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)

//   return (
//     <GlobalContext.Provider value={{
//       // authenticated: state.authenticated,
//       login: login
//     }}>
//       {children}
//     </GlobalContext.Provider>
//   )
// }