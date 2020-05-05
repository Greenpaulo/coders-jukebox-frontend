import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const Comment = ({comment}) => {

  useEffect(() => {
    getCommentData()
    getCommentUser()
  }, [])


  const { getCommentData, getCommentUser } = useContext(GlobalContext);
  
  const [commentData, setCommentData] = useState({
  })

  const [commentUser, setCommentUser] = useState({
  })
  


  console.log(comment);

  return (
    <div className="comment" key={comment._id}>
      <h3>Avatar</h3>

      <p>{comment.content}</p>


    <style jsx>{`

      .comment {
        display: flex;
        padding: 1rem;
        border: 1px solid green;
      }

      p {
        margin: 0 1rem;
      }
  
    `}</style>

    </div>
  )
}

export default Comment;