import Link from 'next/Link';
import Router from 'next/router';
import { useContext } from 'react';
import { GlobalContext} from '../context/GlobalContext';
import UserSearch from './UserSearch';
import colors from '../css-variables/colors'


const Navbar = () => {

  const { authState, currentUser, fetchProfileUser, logout } = useContext(GlobalContext);

  const logoutHandler = () => {
    logout();
  };
  
  const searchUserHandler = () => {
    console.log('searchUserHandler called');
  }

  const profileNavClickHandler = () => {
    fetchProfileUser(currentUser.id, false);
  }

  const hamburgerHandler = () => {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('nav-menu').classList.toggle('dropdown');
  }
  

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

            <UserSearch />

            <ul id="nav-menu">
            {authState.authenticated && currentUser !== null &&
            <Link href="/profile/[userId]" as={`/profile/${currentUser.id}`}>
              <a className="nav-item" onClick={profileNavClickHandler}>
                <i className="fa fa-user"></i> 
                Profile
              </a>
            </Link>
            }
            <Link href="/about">
              <a className="nav-item" onClick={hamburgerHandler}>
                <i className="fa fa-info"></i> 
                About
              </a>
            </Link>
            {!authState.authenticated && 
            <>
              <Link href="/auth">
                <a className="nav-item" onClick={hamburgerHandler}>
                  <i className="fa fa-sign-in"></i> 
                  Login
                </a>
              </Link>
              <Link href="/auth">
                <a className="nav-item" onClick={hamburgerHandler}>
                  <i className="fa fa-user-plus"></i> 
                  Register
                </a>
              </Link>
            </>
            }
            {authState.authenticated &&
              <Link href="/">
                <a className="nav-item" onClick={logoutHandler}>
                  <i className="fa fa-sign-out"></i> 
                  Logout
                </a>
              </Link>
            }

            </ul>
            <div id="hamburger" onClick={hamburgerHandler}>
              <div className="line" id="line1"></div>
              <div className="line" id="line2"></div>
              <div className="line" id="line3"></div>
            </div>
          </div>
        </div>
        

        <style jsx>{`
        
          #navbar {
            padding: 1.5rem 0;
            border-bottom: 1px solid black;
            /* margin-bottom: 2rem; */
            background: ${colors.gradient};
            /* color: white; */
            /* background-color: #93fffb; */

          }
        
          #nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;
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
            transition: text-shadow 0.2s;
          }

          .nav-item:hover {
            text-shadow: 0px 0px 8px rgb(255, 255, 255);
          }

          i {
            display: none;
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

          /* Media queries */
          @media (max-width: 1150px){
            #nav-content {
              width: 90%;
            }

            h1 {
              margin-left: 2rem;
            }

            #nav-menu {
              width: 35vw;
            }
          }

          @media (max-width: 1100px) {
            #nav-content {
              width: 97%;
            }
          }

          @media (max-width: 950px) {
            body {
              overflow-x: hidden;
              
            }

            #navbar {
              position: relative;
            }
            
            #nav-menu {
              z-index: 101;
              flex-direction: column;
              position: absolute;
              top: 100%;
              right: 0px;
              width: 33vw;
              clip-path: circle(0px at top right);
              transition: clip-path 0.7s ease;
              -webkit-box-shadow: -11px 10px 19px -10px rgba(0,0,0,0.27);
              -moz-box-shadow: -11px 10px 19px -10px rgba(0,0,0,0.27);
              box-shadow: -11px 10px 19px -10px rgba(0,0,0,0.27);
              background: ${colors.primary};
              /* opacity: 0.9; */
            }

            #nav-menu.dropdown {
              clip-path: circle(150% at top right);
            }

            .nav-item {
              padding: 2rem 3rem;
              display: block;
              text-transform: uppercase;
              border-bottom: 1px solid #ff6b8d;
              margin: 0;
              font-size: 1.3rem;
            }

            i {
              display: inline-block;
              margin-right: 1rem;
              width: 1.5rem;
              font-size: 1.5rem;
              /* background: black; */
              text-align: center;
              height: 100%;
              padding-top: 0.5rem;
            }

              .nav-item:hover {
              background: ${colors.secondary};
            }

            .line {
              width: 30px;
              height: 3px;
              background-color: white;
              margin: 5px;
              border-radius: 3px;
              transition: all ease 0.5s;
            }

            #hamburger {
              cursor: pointer;
            }

            #hamburger.open {
              /* transform: rotate(45deg); */
            }
            #hamburger.open #line1 {
              transform: rotate(-45deg) translateY(11.5px) scaleX(0.9);
            }
            #hamburger.open #line2{
              opacity: 0;
            }
            #hamburger.open #line3{
              transform: rotate(45deg) translateY(-11.5px) scaleX(0.9);
            }

            @media (max-width: 690px) {
              #nav-menu {
                width: 40%;
              }
            }

            @media (max-width: 570px) {
              #nav-menu {
                width: 45%;
              }
            }

            @media (max-width: 500px) {
              #nav-menu {
                width: 50%;
              }
            }

            @media (max-width: 450px) {
              #nav-menu {
                width: 60%;
              }
            }

            @media (max-width: 375px) {
              .nav-item {
                padding: 2rem 2rem;
              }
            }

           
          


        `}</style>
      </nav>
    // )}
    // </GlobalContext.Consumer>
  )
};

export default Navbar;
