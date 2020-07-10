import FavouriteItem from './FavouriteItem';
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors'

const Favourites = () => {

  const { profileUser } = useContext(GlobalContext);

  return (
    <section id="favourites">
      <h2><i className="fa fa-star" aria-hidden="true"></i>Favourites </h2>

      <div id="favourite-items">
        {profileUser.favourites.map(favourite => (
          <FavouriteItem id={favourite} key={favourite}/>
        ))}
      </div>

      {profileUser.favourites.length === 0 && 
        <h3>
          No favourite users have been added.
        </h3>
      }



  <style jsx>{`
  
    section#favourites {
      padding: 3rem;
      border: 1px solid ${colors.primary};
      border-radius: 10px;
      margin-top: 1rem;
      color: white;
      margin-bottom: 2rem;
    }

    i.fa-star {
      margin-right: 0.75rem;
      color: ${colors.secondary};
      font-size: 1.4rem;
      /* height: 50px; */
    }

    #favourite-items {
      display: grid;
      grid-auto-flow: row;
      grid-template-columns: repeat(5, 1fr);
      padding: 1rem;
      margin-top: 1rem;
      grid-row-gap: 2rem;
    }

    h3 {
      font-weight: normal;
      /* text-align: center; */
    }



    /* Media queries */
    @media (max-width: 1150px ) {
      #favourite-items {
        grid-template-columns: repeat(3, 1fr);
      }

      section#favourites {
        width: 80%;
        margin: 2rem auto;
        padding-left: 2rem;
      }
    }

    @media (max-width: 930px ) {
      #favourite-items {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 600px ) {
      section#favourites {
        padding: 1rem;
      }
    }

    @media (max-width: 500px ) {
      #favourite-items {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    @media (max-width: 370px ) {
      section#favourites {
        padding: 1rem;
      }
    }
  
  `}</style>

    </section>
  )
}

export default Favourites;
