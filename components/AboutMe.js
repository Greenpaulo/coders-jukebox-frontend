import colors from '../css-variables/colors';

const AboutMe = ({profileUser}) => {
  return (
    <section id="about-me">
      <h2>About {profileUser.firstName}</h2>
      <p>
        {profileUser.about}
      </p>
    
    
    
    <style jsx>{`
    
      section#about-me {
        /* background  : ${colors.reversePinkGradient}; */
        border: 1px solid ${colors.primary};
        border-radius: 10px;
        padding: 1rem;
      }
    
    `}</style>
    
    </section>
  )
}

export default AboutMe;
