import colors from '../css-variables/colors';

const AboutMe = ({profileUser}) => {
  return (
    <section id="about-me" className="animate__animated animate__fadeIn">
      <h2>About {profileUser.firstName}</h2>
      {profileUser.about !== null &&
        <p>
          {profileUser.about}
        </p>
      }
      {profileUser.about === null &&
        <p>
          There's nothing here yet!
        </p>
      }
    
    
    
    <style jsx>{`
    
      section#about-me {
        /* background  : ${colors.reversePinkGradient}; */
        border: 1px solid ${colors.primary};
        border-radius: 10px;
        padding: 2rem;
        width: 84%;
        margin: 3rem auto;
      }

      section#about-me.animate__animated.animated_fadeIn {
        animation-delay: 2.5s;
      }

      p {
        padding: 2rem;
        font-size: 1.2rem;
        line-height: 2.5rem;
      }

      /* Media queries */
      @media (max-width: 900px){
        section#about-me {
          width: 90%;
          padding: 2rem 1rem 2rem 1rem;
        }

        h2 {
          margin-left: 1rem;
        }
      }

      @media (max-width: 660px){
        section#about-me {
          padding-bottom: 1rem;
        }
      }

      @media (max-width: 470px){
        p {
          padding: 1rem;
          margin-top: 0.5rem;
        }
      }

      @media (max-width: 400px){
        p {
          font-size: 1rem;
          padding: 0.5rem;
        }

      }

    `}</style>
    
    </section>
  )
}

export default AboutMe;
