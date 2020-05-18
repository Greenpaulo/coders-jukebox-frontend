import Link from 'next/Link';
import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const FavouriteItem = ({id}) => {

  console.log(id)

  const { getFavouriteUser, fetchProfileUser } = useContext(GlobalContext);
  
  const [favUser, setFavUser] = useState({});

  const favUserClickHandler = () => {
    fetchProfileUser(id, false);
  }

  useEffect(() => {
    console.log(id)
    const fetchData = async () => {
      const userData = await getFavouriteUser(id);
      setFavUser({
        firstName: userData.firstName,
        lastName: userData.lastName,
        id
      })
    }
    fetchData();
  }, [id])
  

  return (
    <div>
      <h4>Avatar</h4>

      <Link href="/profile/[userId]" as={`/profile/${id}`}>
        <a onClick={favUserClickHandler}><h3>{favUser.firstName} {favUser.lastName}</h3></a>
      </Link>
    </div>
  )
}

export default FavouriteItem;