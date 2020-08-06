import { useEffect, useContext } from 'react';
import Link from 'next/link';
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

  const { clearProfileUser, authState, currentUser } = useContext(GlobalContext);

  useEffect(() => {
    clearProfileUser();
  }, [])

  return (
    // <AnimatePresence exitBeforeEnter>
    <div className="container">
      {/* <Planet /> */}
      


      <section id="welcome">
        
        <motion.div variants={welcomeTextVariants} initial='hidden' animate='visible' exit='exit'>
          <div id="welcome-text" >
            <h1>CodeTunes</h1>
            <h3>A social music app for coders</h3>
            
            <div className="auth-btns">
              {!authState.authenticated &&
                <>
                  <Link href="/auth">
                    <a className="signup-btn">Sign Up</a>
                  </Link>
                  <Link href="/auth">
                    <a className="login-btn">Login</a>
                  </Link>
                </>
              }
              {authState.authenticated &&
                <>
                  <Link href="/profile/[userId]" as={`/profile/${currentUser.id}`}>
                    <a className="get-started-btn">Get Started</a>
                  </Link>
                </>
              }
            </div>
          </div>
          
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
        height: 70vh;
        margin-top: 4rem;
        overflow: hidden;
        justify-content: center;
        text-align: center;
        /* background: url('/mainsvg.svg') no-repeat; */
      }

      #welcome-text {
        /* width: 50%; */
        /* padding: 2rem; */
        margin-right: 2rem;
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
        margin: 9rem auto 1rem auto;
        line-height: 6rem;
        /* width: 70%; */
        color: ${colors.primary};
        text-align: center;
      }

      section#welcome h3 {
        font-size: 1.5rem;
        /* padding: 5rem; */
        margin: 1.5rem auto 1.5rem auto;
        /* line-height: 6rem; */
        width: 60%;
        color: ${colors.primary};
        text-align: center;
      }

      .auth-btns {
        margin-top: 5rem;
      }

      a {
        border-radius: 20px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin: 2rem;
        background: ${colors.reversePinkGradient};
        transition: text-shadow 0.2s, box-shadow 0.2s;
      }

      a.login-btn {
        /* border: 1px solid ${colors.secondary};
        background-color: ${colors.secondary}; */
      }

      a.signup-btn {
        /* border: 1px solid ${colors.gradient}; */
      }

      a:hover {
        /* Glow effect */
        text-shadow: 0px 0px 8px rgb(255, 255, 255);
        box-shadow: 0px 0px 8px rgb(255, 255, 255);
      }

      @media (max-width: 1024px) {
        #welcome-text {
          margin-right: 0;
        }
      }

      @media (max-width: 680px) {
        section#welcome h1 {
          font-size: 6.5rem;
        }

        a {
          margin: 1rem;
        }
      }

      @media (max-width: 550px) {
        section#welcome h1 {
          font-size: 5.5rem;
        }
      }

      @media (max-width: 500px) {
        section#welcome h1 {
          font-size: 4.5rem;
        }

        section#welcome h3 {
          width: 80%;
        }

        a {
          padding: 10px 35px;
        }
      }

      @media (max-width: 400px) {
        section#welcome h1 {
          font-size: 4.2rem;
        }

        a {
          padding: 10px 35px;
        }
      }

      @media (max-width: 370px) {
        section#welcome h1 {
          font-size: 4rem;
        }

        .auth-btns {
          display: flex;
          flex-direction: column;
          margin-top: 3rem;
        }

        .signup-btn, .login-btn {
          width: 50%;
          margin: 1rem auto;
        }
      }

      @media (max-width: 350px) {
        section#welcome h1 {
          font-size: 3.7rem;
        }
      }

      @media (max-height: 820px) {
        section#welcome h1 {
          margin-top: 6rem;
        }
      }

      @media (max-height: 740px) {
        section#welcome h1 {
          margin-top: 5rem;
        }
      }

      @media (max-height: 670px) {
        section#welcome h1 {
          margin-top: 4rem;
        }

      }

      @media (max-height: 640px) {
        section#welcome h1 {
          margin-top: 3rem;
        }
      }

      @media (max-height: 590px) {
        section#welcome h1 {
          margin-top: 0;
        }
      }
    
    
    `}</style>


    </div>
  )
};

export default Index;
