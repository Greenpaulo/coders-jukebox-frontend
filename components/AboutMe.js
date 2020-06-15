import colors from '../css-variables/colors';

const AboutMe = ({profileUser}) => {
  return (
    <section id="about-me">
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

      p {
        padding: 2rem;
        font-size: 1.2rem;
        line-height: 2.5rem;
      }
    
    `}</style>
    
    </section>
  )
}

export default AboutMe;
