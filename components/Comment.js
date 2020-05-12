import { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';


const Comment = ({comment}) => {

  const { getCommentUser, removeCommentFromPlaylist } = useContext(GlobalContext);
  
  const [commentUser, setCommentUser] = useState({
    firstName: '',
    lastName:''
  });

  const convertDate= (millisecs) => {
    const d = new Date(+millisecs);
    return d.toLocaleString();
  }

  const removeCommentClickHandler = () => {
    // console.log(comment._id);
    removeCommentFromPlaylist(comment._id);
  }

  useEffect(() => {
    async function fetchData() {
      const user = await getCommentUser(comment.commenter._id);
      setCommentUser({
        firstName: user.firstName,
        lastName: user.lastName 
      })
    }
    fetchData();
  }, [])



  // console.log(comment.createdAt.toISOString());

  return (
    <div className="comment" key={comment._id}>
      <div className="content">
        <h4>Avatar</h4>

        <h3>{commentUser.firstName} {commentUser.lastName}</h3>

        <p>{comment.content}</p>

        <h4 className="date">{convertDate(comment.createdAt)}</h4>
      </div>

      <button onClick={removeCommentClickHandler}>X</button>



    <style jsx>{`

      .comment {
        display: flex;
        justify-content: flex-end;
      }
      
      .content {
        display: flex;
        width: 100%;
        padding: 1.2rem;
        border: 1px solid green;
        border-radius: 5px;
        margin: 1rem 0;

      }

      h4 {
        margin-right: 1rem;
      }

      p {
        margin: 0 2rem;
      }

      .date {
        margin-left: auto;
      }

      button {
      background-color: #5e00ff;
      color: white;
      padding: 0 1rem;
      border-radius: 10px;
      margin: 1rem 0.5rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
  
    `}</style>

    </div>
  )
}

// Comment.getInitialProps = async ctx => {
//   getCommentData
// }

export default Comment;