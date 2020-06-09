import Link from 'next/Link';
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';



const FavouriteItem = ({id}) => {


  const { getFavouriteUser, fetchProfileUser, removeFavourite } = useContext(GlobalContext);
  
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
        {favUser.profilePhotoFilename !== null && favUser.profilePhotoFilename !== '' &&
          <img src={`http://localhost:5000/image/${favUser.profilePhotoFilename}`} alt="avatar" />
        }
      </div>

      <Link href="/profile/[userId]" as={`/profile/${id}`}>
        <a onClick={favUserClickHandler}><h3>{favUser.firstName} {favUser.lastName}</h3></a>
      </Link>

      <button onClick={removeFavHandler}>Remove</button>

      
      <style jsx>{`
      
        #favourite-item {
          margin: 0 1rem;
          border: 2px solid ${colors.primary};
          border-radius: 5px;
          padding: 2rem;
        }
        
        img {
          width: 100px;
        }
      
      
      `}</style>




    </div>
  )
}

export default FavouriteItem;