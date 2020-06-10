import colors from '../css-variables/colors';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer id="main-footer">
      <h3>CODETUNES</h3>
      <h3>&copy; {year}</h3>

    <style jsx>{`

      footer {
        background: ${colors.reverseGradient};
        text-align: center;
        padding: 1.2rem;
        margin-top: 2rem;
      }
    
    
    `}</style>



    </footer>
  )
}

export default Footer;
