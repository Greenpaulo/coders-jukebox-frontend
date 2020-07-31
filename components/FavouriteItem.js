import Link from 'next/Link';
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';



const FavouriteItem = ({id}) => {


  const { getFavouriteUser, fetchProfileUser, removeFavourite, currentUser, profileUser, authState } = useContext(GlobalContext);
  
  const [favUser, setFavUser] = useState({});

  const favUserClickHandler = () => {
    fetchProfileUser(id, false);
  }

  const removeFavHandler = () => {
    removeFavourite(id);
  }

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getFavouriteUser(id);
      setFavUser({
        firstName: userData.firstName,
        lastName: userData.lastName,
        profilePhotoFilename: userData.profilePhotoFilename,
        id
      })
    }
    fetchData();
  }, [id])
  

  return (
    <div id="favourite-item">
      {/* <h4>Avatar</h4> */}
      <div id="avatar">
        {favUser.profilePhotoFilename === null &&
        <div className="default-crop">
          <Link href="/profile/[userId]" as={`/profile/${id}`}>
            <a onClick={favUserClickHandler}>
              <img src="/default-avatar.jpg" alt="avatar" />
            </a>
          </Link>
        </div>
        
        } 

        {favUser.profilePhotoFilename !== null && favUser.profilePhotoFilename !== '' && favUser.profilePhotoFilename !== undefined &&
          <Link href="/profile/[userId]" as={`/profile/${id}`}>
            <div className="crop" onClick={favUserClickHandler}>
            </div>
          </Link>
        }
      </div>

      <Link href="/profile/[userId]" as={`/profile/${id}`}>
        <a onClick={favUserClickHandler}><h3>{favUser.firstName} {favUser.lastName}</h3></a>
      </Link>

      
      { authState.authenticated === true && currentUser.id === profileUser.id &&
        <button onClick={removeFavHandler}>
          <i className="fa fa-times-circle"></i>
        </button>
      }

      
      <style jsx>{`
      
        #favourite-item {
          margin: 0 1rem;
          border-radius: 5px;
          padding: 2rem;
          position: relative;
          border: 2px solid ${colors.primary};
        }

        .crop {
          /* max-height: 100px; */
          /* max-width: 100px; */
          height: 100px;
          width: 100px;
          overflow: hidden;
          border-radius: 50px;
          margin: 0 auto 0.8rem auto;
          background: url('http://localhost:5000/image/${favUser.profilePhotoFilename}');
          /* background-position: center; */
          background-size: cover;
          cursor: pointer;
        }

        .default-crop {
          max-height: 100px;
          max-width: 100px;
          overflow: hidden;
          border-radius: 50px;
          margin: 0 auto 0.8rem auto;
        }
        
        img {
          width: 100px;
          /* position: cover; */
        }

        a {
          color: white;
        }

        button {
          width: 40px;
          height: 8px;
          border-radius: 50%;
          position: absolute;
          top: 0px;
          right: 8px;
          background-color: black;
          font-size: 1.5rem;
          color: ${colors.primary};
        }

        i {
          transition: color 0.2s ease-in-out;
        }
        
        i:hover {
          color: #e5305a;
        }

        h3 {
          text-align: center;
        }

        @media (max-width: 690px ) {
          #favourite-item {
            margin: 0 1rem;
            padding: 1rem;
          }

        }

        @media (max-width: 450px ) {
          .crop {
            width: 80px;
            height: 80px;
          }

          img {
            width: 80px;
            /* padding-top: 1rem; */
          }

          #avatar {
            margin-top: 1rem;
          }

        }
      
      
      `}</style>




    </div>
  )
}

export default FavouriteItem;