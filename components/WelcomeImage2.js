import colors from '../css-variables/colors';

const WelcomeImage2 = () => {
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 91.1">
      <defs>
        <filter id="f2" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          {/* <!-- stdDeviation is how much to blur --> */}
          <feOffset dx="2" dy="2" result="offsetblur" />
          {/* <!-- how much to offset --> */}
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
            {/* <!-- slope is the opacity of the shadow --> */}
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            {/* <!-- this contains the offset blurred image --> */}
            <feMergeNode in="SourceGraphic" />
            {/* <!-- this contains the element that the filter is applied to --> */}
          </feMerge>
        </filter>

        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
      </defs>
      {/* <title>headphones</title> */}
      <path className="cls-1" d="M50,4C25.2,4,5,23.3,5,47v.9C5,53.1,5,59,6.9,63.8l-.5.5c-1.4,1.2-1.7,3.5-.8,5.6l9.3,21.9a5,5,0,0,0,4.3,3.3h.3L32,94a3.47,3.47,0,0,0,2.6-1.6,5.36,5.36,0,0,0,.1-4.8L22.3,58.3a5,5,0,0,0-3.5-3.2,3.23,3.23,0,0,0-3,.7l-.4.4A30.8,30.8,0,0,1,13,44.7c0-18.9,16.6-34.3,37-34.3S87,25.8,87,44.7a30,30,0,0,1-2.4,11.5l-.4-.4a3.23,3.23,0,0,0-3-.7,5,5,0,0,0-3.5,3.2L65.3,87.6a5.36,5.36,0,0,0,.1,4.8A3,3,0,0,0,68,94l12.6,1h.3a5,5,0,0,0,4.3-3.3l9.3-21.9a5,5,0,0,0-.8-5.6l-.5-.5C95,59,95,53.1,95,47.9V47C95,23.3,74.8,4,50,4ZM87,33.4l3.2-.9a37.22,37.22,0,0,1,2.3,8.7l-3.7,1A28.73,28.73,0,0,0,87,33.4ZM11.1,42.2l-3.7-1a37.22,37.22,0,0,1,2.3-8.7l3.2.9A36.19,36.19,0,0,0,11.1,42.2ZM19.2,93a3,3,0,0,1-2.6-2.1L7.3,69.1c-.5-1.3-.4-2.7.3-3.3l6.9-6.1L28,92.4ZM18,57h.4a3.2,3.2,0,0,1,2.1,2L32.9,88.2a3.25,3.25,0,0,1,0,2.9,1.36,1.36,0,0,1-1.1.7l-1.7.1L16.1,58l1-.9C17.4,57.1,17.7,57,18,57Zm-4.2.7L8.5,62.4C7,58,7,52.7,7,47.9V47c0-1.3.1-2.5.2-3.8l3.8,1v.5A32.78,32.78,0,0,0,13.8,57.7ZM50,8.4c-16.5,0-30.6,9.6-36.3,23l-3.1-.8C17.2,16.2,32.4,6,50,6S82.8,16.2,89.4,30.7l-3.1.8C80.6,18,66.5,8.4,50,8.4ZM67.1,91.3a3,3,0,0,1,0-2.9L79.5,59.2a3.39,3.39,0,0,1,2.1-2H82a1.61,1.61,0,0,1,.9.3l1,.9-14,33.9L68.2,92A1.36,1.36,0,0,1,67.1,91.3ZM92.7,69.1,83.4,91a3,3,0,0,1-2.6,2.1l-8.9-.7,4.6-11.1h0l8.9-21.6,6.9,6.1C93.1,66.4,93.2,67.8,92.7,69.1ZM86.2,57.7a32.78,32.78,0,0,0,2.8-13v-.5l3.8-1c.1,1.2.2,2.5.2,3.8v.9c0,4.8,0,10.2-1.5,14.5Z" transform="translate(-5 -4)" />

  <style jsx>{`
    svg {
        height: 400px;
        width: 400px;
        margin: 2rem;
        padding: 1rem;
        fill: ${colors.primary};
      }

    path {

      filter: url(#f2);

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
    }
  
  `}</style>




    </svg>
  )
}

export default WelcomeImage2;
