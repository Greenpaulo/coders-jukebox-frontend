import Link from 'next/Link';
import { useContext, useState, useEffect, useRef } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Comment = ({comment}) => {
  
  const commenterId = comment.commenter._id 
  
  const { getCommentUser, removeCommentFromPlaylist, currentUser, fetchProfileUser, editComment } = useContext(GlobalContext);
  
  const [commentUser, setCommentUser] = useState({
    firstName: '',
    lastName:'',
    profilePhotoFilename: ''
  });
  
  const [editMode, setEditMode] = useState(false);
  
  const editedContentRef = useRef();

  
  useEffect(() => {
    async function fetchData() {
      const user = await getCommentUser(comment.commenter._id);
      setCommentUser({
        firstName: user.firstName,
        lastName: user.lastName,
        profilePhotoFilename: user.profilePhotoFilename
      })
    }
    fetchData();
  }, [])

  // const [content, setContent] = useState('');

  // const handleChange = (e) => {
  //   setContent(e.target.value);
  // }

  
  const editCommentClickHandler = () => {
    //Show the edit comment textarea
    setEditMode(true); 
  }

  const editCommentSubmitHandler = (e) => {
    e.preventDefault();
    // Check if the content is empty
    if (editedContentRef.current.value.trim().length === 0) {
      return;
    }
    editComment(comment._id, editedContentRef.current.value);
    // Exit edit mode
    setEditMode(false);
  }


  
  
  const convertDate= (millisecs) => {
    const d = new Date(+millisecs);
    return d.toLocaleString();
  }
  const removeCommentClickHandler = () => {
    removeCommentFromPlaylist(comment._id);
  }

  const commenterClickHandler = () => {
    fetchProfileUser(commenterId, false);
  }



  return (
    <>
    <>
      <div className="comment" key={comment._id}>
        <div className="content">
            <div id="avatar">
              {commentUser.profilePhotoFilename !== null && commentUser.profilePhotoFilename !== '' &&
                <img src={`http://localhost:5000/image/${commentUser.profilePhotoFilename}`} alt="avatar" />
              }
            </div>
            <div className="comment-info">
              <Link href="/profile/[userId]" as={`/profile/${commenterId}`}>
                <a onClick={commenterClickHandler}><h3>{commentUser.firstName} {commentUser.lastName}</h3></a>
              </Link>
              
              {!editMode && 
              <>
                <p>{comment.content}</p>

                <h4 className="date">{convertDate(comment.createdAt)}</h4>
              </>
              }

              {editMode &&
                <section id="edit-comment">
                  <form onSubmit={(e) => editCommentSubmitHandler(e)}>
                    <textarea name="edit-comment-input" id="edit-comment-input" defaultValue={comment.content} cols="30" rows="3" ref={editedContentRef}></textarea>
                    <button type="submit">Submit</button>
                  </form>
                </section>
              }

              {currentUser.id === commenterId && 
                <>
                <button onClick={editCommentClickHandler}>EDIT</button>
                <button onClick={removeCommentClickHandler}>X</button>
                </>
              }
            </div>
          </div>
        </div>
    </>

    

      <style jsx>{`

      .comment {
        display: flex;
        justify-content: flex-end;
      }
      
      .content {
        display: flex;
        width: 100%;
        padding: 1.2rem;
        border: 1px solid black;
        border-radius: 5px;
        margin: 1rem 0;
        background-color: white;
      }

      .comment-info {
        display: flex;
        width: 100%;
        align-items: center;
        margin-left: 1rem;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 10px;
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

  </>
  )
}

// Comment.getInitialProps = async ctx => {
//   getCommentData
// }

export default Comment;