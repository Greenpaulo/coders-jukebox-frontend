import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Index = () => {

  const { clearProfileUser } = useContext(GlobalContext);

  useEffect(() => {
    clearProfileUser();
  }, [])

  return (
      <div className="container">
        <h1>Home</h1>
      </div>
  )
};

export default Index;
