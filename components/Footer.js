import colors from '../css-variables/colors';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer id="main-footer">
      <h4>CODETUNES</h4>
      <h4>&copy; {year}</h4>

    <style jsx>{`

      footer {
        color: white;
        text-align: center;
        padding: 1.2rem;
        margin-top: 2rem;
        background: ${colors.reverseGradient};
      }

      h4 {
        font-weight: normal;
      }
    
    
    `}</style>



    </footer>
  )
}

export default Footer;
