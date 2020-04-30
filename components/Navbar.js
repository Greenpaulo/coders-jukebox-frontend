import Link from 'next/Link';
import { useContext } from 'react';
import { GlobalContext} from '../context/GlobalContext';
import SearchBar from './Searchbar';


const Navbar = () => {

  const { authState, currentUser, logout } = useContext(GlobalContext);

  const logoutHandler = () => {
    logout();
  };
  
  return (    
      <nav id="navbar">
        <div className="container">
          <div id="nav-content">
            <div id="logo">
              <Link href="/">
                <a>
                  <h1>CodeTunes</h1>
                </a>
              </Link>
            </div>

            <div id="search">
              <SearchBar placeholder='Search for user'/>
            </div>

            <ul id="nav-menu">
            {authState.authenticated &&
            <Link href="/profile/[userId]" as={`/profile/${currentUser.id}`}>
              <a className="nav-item">Hi, {currentUser.firstName}</a>
            </Link>
            }
            <Link href="/about">
              <a className="nav-item">About</a>
            </Link>
            {!authState.authenticated && 
            <>
              <Link href="/auth">
                <a className="nav-item">Login</a>
              </Link>
              <Link href="/auth">
                <a className="nav-item">Register</a>
              </Link>
            </>
            }
            {authState.authenticated &&
              <Link href="/">
                <a className="nav-item" onClick={logoutHandler}>Logout</a>
              </Link>
            }

            </ul>
          </div>
        </div>
        

        <style jsx>{`
        
          #navbar {
            padding: 1.5rem 0;
            border-bottom: 1px solid white;
            margin-bottom: 2rem;
            /* background-color: #44fff8; */
            /* background-color: #93fffb; */

          }
        
          #nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          #nav-menu {
            display: flex;
            justify-content: space-between;
          }

          #logo h1 {
            color: white;
            font-size: 2rem;
            text-transform: uppercase;
            letter-spacing: 0.3rem;
          }

          .nav-item {
            color: white;
            margin: 0 1rem;
            font-weight: 400;
          }

          #search {
            width: 50%;
          }

          #searchbar{
            width: 100%;
          }

          label {
            position: absolute;
            top: 10px;
            left: 12px;
          }
          
          #main-searchbar {
            margin: auto;
            display: flex;
            position: relative;
          }

          #main-searchbar input {
            width: 100%;
            border-radius: 23px;
            padding: 0.6rem 0.5rem 0.5rem 2.3rem;
            font-size: 1.1rem;
            border: none;
          }

          #main-searchbar input :focus {
            outline: none;
          }

        `}</style>
      </nav>
    // )}
    // </GlobalContext.Consumer>
  )
};

export default Navbar;
