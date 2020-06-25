import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence exitBeforeEnter>
    <div className="container">
      <section id="welcome">
        <motion.div id="welcome-text" variants={welcomeTextVariants} initial='hidden' animate='visible' exit='exit'>
          <h1>CodeTunes</h1>
        </motion.div>
        {/* <div id="welcome-img">
          <img src='/keyboard3.jpg' />    
        </div> */}
      </section>
      </div>





    <style jsx>{`
    
      section#welcome{
        display: flex;
        height: 80vh;
        overflow: hidden;
        justify-content: center;
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
        font-size: 6rem;
        padding: 5rem;
        margin-bottom: 1rem;
        line-height: 6rem;
        width: 60%;
        color: ${colors.primary}
      }
    
    
    `}</style>


    </AnimatePresence>
  )
};

export default Index;
