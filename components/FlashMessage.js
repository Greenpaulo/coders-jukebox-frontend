
const FlashMessage = ({message, type}) => {
  
  let color;
  if (type === "error") {
    color = '#ff4d4d'
  } else if (type === "success"){
    color = '#5cd65c'
  }
  
  return (
    <div id="message">
      <span id="message-text">{message}</span>
    
    
    <style jsx>{`
    
      #message {
        color: white;
        background-color: ${color};
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        border-radius: 5px;
      }

      #message-text {
        /* font-weight: bold; */
      }

      @media (max-height: 870px) {
        #message {
          padding: 2px 15px;
        }
      }
    
    
    `}</style>

      </div>
  )
}

export default FlashMessage;
