
const FlashMessage = ({message}) => {
  return (
    <div id="message">
      {message}
    
    
    <style jsx>{`
    
      #message {
        color: white;
        background-color: red;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
        border-radius: 5px;
      }
    
    
    `}</style>

      </div>
  )
}

export default FlashMessage;
