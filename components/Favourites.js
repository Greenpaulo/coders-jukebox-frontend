import FavouriteItem from './FavouriteItem';
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Favourites = () => {

  const { profileUser } = useContext(GlobalContext);

  return (
    <section id="favourites">
      <h2>Favourites</h2>

      {profileUser.favourites.map(favourite => (

        <FavouriteItem id={favourite} key={favourite}/>

      ))}


  <style jsx>{`
  
    section {
      padding: 3rem;
      border: 1px solid white;
      border-radius: 10px;
      margin-top: 1rem; 
    }
  
  `}</style>

    </section>
  )
}

export default Favourites;
