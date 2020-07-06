
const FlashMessage = ({message}) => {
  return (
    <div id="message">
      <span id="message-text">{message}</span>
    
    
    <style jsx>{`
    
      #message {
        color: white;
        background-color: #ff4d4d;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        border-radius: 5px;
      }

      #message-text {
        /* font-weight: bold; */
      }
    
    
    `}</style>

      </div>
  )
}

export default FlashMessage;