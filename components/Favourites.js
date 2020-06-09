import FavouriteItem from './FavouriteItem';
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Favourites = () => {

  const { profileUser } = useContext(GlobalContext);

  return (
    <section id="favourites">
      <h2>Favourites</h2>

      <div id="favourite-items">
        {profileUser.favourites.map(favourite => (
          <FavouriteItem id={favourite} key={favourite}/>
        ))}
      </div>



  <style jsx>{`
  
    section#favourites {
      padding: 3rem;
      border: 1px solid black;
      border-radius: 10px;
      margin-top: 1rem;
      color: black;
      margin-bottom: 2rem;
    }

    #favourite-items {
      display: flex;
      padding: 1rem;
      margin-top: 1rem;
    }
  
  `}</style>

    </section>
  )
}

export default Favourites;
