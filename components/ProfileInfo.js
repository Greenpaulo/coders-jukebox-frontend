import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';

const ProfileInfo = ({setEditMode, editMode}) => {

  const { authState, currentUser, profileUser, fetchProfileUser, clearProfileUser, addFavourite, removeFavourite } = useContext(GlobalContext);

  const [isFavourite, setIsFavourite] = useState(false)

  const addFavouriteHandler = () => {
    addFavourite(profileUser.id);
  }

  const removeFavouriteHandler = () => {
    removeFavourite(profileUser.id);
  }

  const getLanguageString = () => {
    const languages = profileUser.languages;
    let languageString = '';
    
    if (profileUser.languages.length === 0){
      return languageString;
    }

    else {
      languages.map((language, index) => {
        if(language !== ''){
          languageString += language;
          if (languages[index+1] !== '' && index+1 !== languages.length) {
            languageString += ' ' + '/' + ' ';
          }
        }
      })
      return languageString;
    }
  }

  return (
    <section id="user">
      <div id="profile-photo">
        {profileUser.profilePhotoFilename !== null && profileUser.profilePhotoFilename !== '' &&
          <div className="crop">
            <img src={`http://localhost:5000/image/${profileUser.profilePhotoFilename}`} alt="profile-photo" />
          </div>
        }
      </div>

      <div id="user-info">
        <div id="info">
          <h1>{profileUser.firstName} {profileUser.lastName}</h1>
          <h2>Job Title: &nbsp; {profileUser.jobTitle}</h2>
          <h2>Location: &nbsp; {profileUser.location}</h2>
          <h2>Languages: &nbsp; {getLanguageString()}</h2>
        </div>

        <div id="buttons">
          {profileUser.id === currentUser.id &&
            <i className="fa fa-cog fa-2x" id="profile-edit-cog" aria-hidden="true" onClick={() => setEditMode(!editMode)}></i>
            // <button id="profile-edit-btn" onClick={showProfileEditSection}><i className="fa fa-cog" aria-hidden="true"></i></button>
          }
          {profileUser.id !== currentUser.id && !(currentUser.favourites.includes(profileUser.id)) && authState.authenticated === true &&
            <button id="add-favourite" onClick={addFavouriteHandler}>
              <i className="fa fa-star-o fa-2x favourite" aria-hidden="true"></i>
            </button>
          }
          {currentUser.favourites.includes(profileUser.id) &&
            <button id="remove-favourite" onClick={removeFavouriteHandler}>
              <i className="fa fa-star fa-2x favourite" aria-hidden="true"></i>
            </button>
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
        padding: 3.5rem 3rem 3rem 3rem;
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
        border: 1px solid ${colors.tertiary};
        border-radius: 50%;
        padding: 0.7rem;
        font-size: 1rem;
        height: 50px;
        width: 50px;
        position: relative;
        
        /* height: 10%; */
      }

      #playlist {
        margin-top: 4rem;
      }

      .crop {
        max-width: 266px;
        max-height: 266px;
        overflow: hidden;
        border-radius: 50%;
      }
      
      img {
        width: 100%;
        height: 100%;
      }

      i.favourite {
        color: ${colors.secondary};
        position: absolute;
        top: 9px;
        left: 9.6px;
      }
    
    `}</style>  

    </section>
  )
}

export default ProfileInfo;
