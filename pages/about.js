import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const About = () => {

  const { clearProfileUser } = useContext(GlobalContext);

  useEffect(() => {
    clearProfileUser();
  }, [])

  return (
    <div className="container">
      <h1>About</h1>
    </div>
  )
};

export default About;