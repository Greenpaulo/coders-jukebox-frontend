import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors'

const Index = () => {

  const { clearProfileUser } = useContext(GlobalContext);

  useEffect(() => {
    clearProfileUser();
  }, [])

  return (
    <div className="container">
      <section id="welcome">
        <h1>Welcome To CodeTunes</h1>
      </section>




    <style jsx>{`
    
      section#welcome{

      }

      section#welcome h1 {
        font-size: 6rem;
        padding: 5rem;
        margin-bottom: 1rem;
        line-height: 6rem;
        width: 60%;
        color: ${colors.primary}
      }
    
    
    `}</style>


    </div>
  )
};

export default Index;
