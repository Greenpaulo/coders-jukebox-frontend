import { useEffect, useContext } from 'react';
import Link from 'next/Link';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';
import Footer from '../components/Footer';
import WelcomeImage from '../components/WelcomeImage';

const About = () => {

  const { clearProfileUser } = useContext(GlobalContext);

  useEffect(() => {
    clearProfileUser();
  }, [])

  return (
    <>
    <div className="container">
      <section id="about">
        <h1>About</h1>
        <div id="about-text">
          <p>
            Welcome to CodeTunes! Inspired by the beautiful fusion of code and music. 
            
            This app is built for coders to share their favourite coding music whilst also serving to connect coders together!
          </p>
          <p>
            This app was built with Next.js, GraphQL, Express, MongoDB and custom CSS.
          </p>
        </div>

        <div id="profile-link">
          <p id="profile-link-text"> I'm Paul, check my profile to get you started:</p>
          <Link href='/profile/5e8c64714136ca2d1ca024c7'><a id="profile-link-btn">Paul's Profile</a></Link>
        </div>
        
        <div id="other-links">
        <p>If you like this site then check out my others:</p>
          <ul>
            <li className="link">
              <a href="https://blissful-sinoussi-d8e11c.netlify.app" target="_blank">
                  <div className="crop">
                    <img src='/portfolio.png' />
                  </div>
                  <h4>Portfolio</h4>
              </a>
            </li>
            <li className="link">
              <a href="https://www.journeytodev.org/" target="_blank">
                <div className="crop">
                  <img src='/journey_to_dev.png' />
                </div>
                <h4>JourneyToDev</h4>
              </a>
            </li>
            <li className="link">
              <a href="https://morning-depths-36159.herokuapp.com/" target="_blank">
                <div className="crop">
                  <img src='/the_herbalist.png' />
                </div>
                <h4>The Herbalist</h4>
              </a>
            </li>
            
          </ul>
        </div>

      </section>

      </div>
      {/* <Footer /> */}



  <style jsx>{`

    section#about {
      margin-top: 3rem;
      padding: 1rem;
      color: ${colors.primary};
    }

    h1 {
      font-size: 4rem;
      padding: 1rem;
      margin-bottom: 2rem;
    }

    #about-text {
      padding-bottom: 1rem;
      width: 75%;
      margin-bottom: 2rem;
      border-bottom: 1px solid ${colors.primary};
    }

    p {
      padding: 1rem;
      font-size: 1.3rem;
      line-height: 2.5rem;
    }

    #profile-link {
      width: 75%;
      padding-bottom: 4rem;
      border-bottom: 1px solid ${colors.primary};
    }

    #profile-link-text {
      margin-bottom: 2rem;
    }

    a#profile-link-btn {
      margin: 1rem;
      border-radius: 20px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      text-transform: uppercase;
      background: ${colors.reversePinkGradient};
      transition: text-shadow 0.2s, box-shadow 0.2s;
    }

    a#profile-link-btn:hover {
      /* Glow effect */
      text-shadow: 0px 0px 8px rgb(255, 255, 255);
      box-shadow: 0px 0px 8px rgb(255, 255, 255);
    }

    #other-links {
      /* padding: 1rem; */
      margin-top: 1.5rem;
    }

    ul {
      list-style: none;
      margin-bottom: 2rem;
    }

    li {
      padding: 1rem;
      font-size: 1.5rem;
    }

    li a {
      display: flex;
      align-items: center;
    }

    li a h4 {
      color: ${colors.secondary}
    }

    .crop {
      max-width: 56px;
      max-height: 56px;
      overflow: hidden;
      border-radius: 50%;
      border: 3px solid ${colors.primary}
    }
    
    img {
      width: 100%;
      height: 100%;
      background-position: 50px 50px;
    }

    .link h4 {
      margin-left: 1rem;
      font-weight: normal;
      font-size: 1.4rem;
    }


    /* Media queries */
    @media (max-width: 1200px) {
      section#about {
        padding: 0 2rem 0 4rem;
      }
    }

    @media (max-width: 1000px) {
      #about-text, #profile-link {
        width: 85%;
      }
    }

    @media (max-width: 800px) {
      #about-text, #profile-link {
        width: 100%;
      }

      section#about {
        padding: 0 2rem 0 2rem;
      }
    }

    @media (max-width: 450px) {
      p {
        font-size: 1.2rem;
      }

      h1 {
        font-size: 4rem;
      }
    }
  
  `}</style>


    </>
  )
};

export default About;