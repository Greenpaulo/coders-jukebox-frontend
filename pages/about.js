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
              <a href="https://blissful-sinoussi-d8e11c.netlify.app" target="_blank">Portfolio</a>
            </li>
            <li className="link">
              <a href="https://www.journeytodev.org/" target="_blank">JourneyToDev</a>
            </li>
            <li className="link">
              <a href="https://morning-depths-36159.herokuapp.com/" target="_blank">The Herbalist</a>
            </li>
            
          </ul>
        </div>

      </section>

      </div>
      <Footer />



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
      width: 70%;
      margin-bottom: 2rem;
      border-bottom: 1px solid ${colors.primary};
    }

    p {
      padding: 1rem;
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    #profile-link {
      width: 70%;
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
      margin-top: 2rem;
    }

    li {
      padding: 1rem;
      font-size: 1.5rem;
    }

    li a {
      color: ${colors.secondary}
    }
  
  `}</style>


    </>
  )
};

export default About;