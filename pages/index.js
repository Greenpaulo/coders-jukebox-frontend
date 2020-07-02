import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';
import { motion, AnimatePresence } from 'framer-motion';
import Planet from '../components/Planet';
import WelcomeImage from '../components/WelcomeImage';
import WelcomeImage2 from '../components/WelcomeImage2';

const welcomeTextVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 2
    }
  },
  exit: { y: -500, opacity: 1 }
}

const Index = () => {

  const { clearProfileUser } = useContext(GlobalContext);

  useEffect(() => {
    clearProfileUser();
  }, [])

  return (
    // <AnimatePresence exitBeforeEnter>
    <div className="container">
      {/* <Planet /> */}
      


      <section id="welcome">
        
        <motion.div id="welcome-text" variants={welcomeTextVariants} initial='hidden' animate='visible' exit='exit'>
          <h1>CodeTunes</h1>
          <h3>A social music app for coders</h3>
        </motion.div>

        <WelcomeImage />
          


        {/* <div id="welcome-img">
          <img src='/keyboard3.jpg' />    
        </div> */}
      </section>
      {/* </div> */}





    <style jsx>{`

      section#welcome{
        display: flex;
        height: 80vh;
        margin-top: 4rem;
        overflow: hidden;
        justify-content: center;
        /* background: url('/mainsvg.svg') no-repeat; */
      }

      #welcome-text {
        width: 50%;
        /* padding: 2rem; */
        margin-right: 1rem;
      }
      
      #welcome-img {
        max-width: 100%;
      }

      #welcome-img img {
        max-height:100%;
      }

      section#welcome h1 {
        font-size: 7.5rem;
        /* padding: 5rem 5rem 0 5rem; */
        margin: 6rem 4rem 1rem 0;
        line-height: 6rem;
        width: 70%;
        color: ${colors.primary}
      }

      section#welcome h3 {
        font-size: 1.5rem;
        /* padding: 5rem; */
        margin-top: 1.5rem;
        /* line-height: 6rem; */
        width: 60%;
        color: ${colors.primary};
        text-align: center;
      }
    
    
    `}</style>


    </div>
  )
};

export default Index;
