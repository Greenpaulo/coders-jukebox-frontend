import FavouriteItem from './FavouriteItem';
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors'

const Favourites = () => {

  const { profileUser } = useContext(GlobalContext);

  return (
    <section id="favourites">
      <h2><i className="fa fa-user" aria-hidden="true"></i>Favourites </h2>

      <div id="favourite-items">
        {profileUser.favourites.map(favourite => (
          <FavouriteItem id={favourite} key={favourite}/>
        ))}
      </div>



  <style jsx>{`
  
    section#favourites {
      padding: 3rem;
      border: 1px solid ${colors.primary};
      border-radius: 10px;
      margin-top: 1rem;
      color: white;
      margin-bottom: 2rem;
    }

    i.fa-user {
      margin-right: 0.75rem;
      /* height: 50px; */
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
