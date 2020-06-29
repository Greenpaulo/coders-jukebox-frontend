
const Planet = () => {
  return (
    <div id='planet'>


  <style jsx>{`
  
    div {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      box-shadow:
        0 0 20px #fff,
        -20px 0 80px #f0f,
        20px 0 80px #0ff,
        inset 0 0 50px #fff,
        inset 50px 0 80px #f0f,
        inset -50px 0 80px #0ff,
        inset 50px 0 300px #f0f,
        inset -50px 0 300px #0ff;
      animation: pulsate 6s linear infinite;
    }

    @keyframes pulsate {
      50% {
        box-shadow:
          0 0 20px #fff,
          20px 0 80px #f0f,
          -20px 0 80px #0ff,
          inset 0 0 50px #fff,
          inset -50px 0 80px #f0f,
          inset 50px 0 80px #0ff,
          inset -50px 0 300px #f0f,
          inset 50px 0 300px #0ff;
      }
    }
  
  
  
  
  
  `}</style>
    </div>
  )
}

export default Planet;
