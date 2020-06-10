import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ProfileInfo = ({setEditMode, editMode}) => {

  const { authState, currentUser, profileUser, fetchProfileUser, clearProfileUser, addFavourite, removeFavourite } = useContext(GlobalContext);

  const [isFavourite, setIsFavourite] = useState(false)

  const addFavouriteHandler = () => {
    addFavourite(userId);
  }

  const removeFavouriteHandler = () => {
    removeFavourite(profileUser.id);
  }

  return (
    <section id="user">
      <div id="profile-photo">
        {profileUser.profilePhotoFilename !== null && profileUser.profilePhotoFilename !== '' &&
          <img src={`http://localhost:5000/image/${profileUser.profilePhotoFilename}`} alt="profile-photo" />
        }
      </div>

      <div id="user-info">
        <div id="info">
          <h1>{profileUser.firstName} {profileUser.lastName}</h1>
          <h2>Job Title: &nbsp; {profileUser.jobTitle}</h2>
          <h2>Location: &nbsp; {profileUser.location}</h2>
        </div>

        <div id="buttons">
          {profileUser.id === currentUser.id &&
            <i className="fa fa-cog fa-2x" id="profile-edit-cog" aria-hidden="true" onClick={() => setEditMode(!editMode)}></i>
            // <button id="profile-edit-btn" onClick={showProfileEditSection}><i className="fa fa-cog" aria-hidden="true"></i></button>
          }
          {profileUser.id !== currentUser.id && !(currentUser.favourites.includes(profileUser.id)) && authState.authenticated === true &&
            <button id="add-favourite" onClick={addFavouriteHandler}>Add Favourite</button>
          }
          {currentUser.favourites.includes(profileUser.id) &&
            <button id="remove-favourite" onClick={removeFavouriteHandler}>Remove Favourite</button>
          }
        </div>
      </div>


    <style jsx>{`

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

      i#profile-edit-cog {
        cursor: pointer;
        transition: transform 2s;
      }

      i#profile-edit-cog:hover {
        transform: rotate(360deg);
      }
      
      button#add-favourite, button#remove-favourite {
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

    </section>
  )
}

export default ProfileInfo;
