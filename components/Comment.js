import Link from 'next/Link';
import { useContext, useState, useEffect, useRef } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import colors from  '../css-variables/colors';

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
    setEditMode(!editMode); 
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
    // return d.toLocaleString();
    const dateArray = d.toLocaleString().split(", ");
    // console.log(array);
    return dateArray
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
              <div className="commenter">
                <Link href="/profile/[userId]" as={`/profile/${commenterId}`}>
                  <a onClick={commenterClickHandler}><h3>{commentUser.firstName} {commentUser.lastName}</h3></a>
                </Link>
              </div>
              
              {!editMode && 
              <>
                <p>{comment.content}</p>

                {/* <h4 className="date">{convertDate(comment.createdAt)}</h4> */}
                
                <div className="date-container">
                  {convertDate(comment.createdAt).map(date => {
                    return <h4 className="date">{date}</h4>
                  })}
                </div>
              </>
              }

              {editMode &&
                <section id="edit-comment">
                  <form id="edit-form" onSubmit={(e) => editCommentSubmitHandler(e)}>
                    <textarea name="edit-comment-input" id="edit-comment-input" defaultValue={comment.content} cols="30" rows="2" ref={editedContentRef}></textarea>
                    <button type="submit">Submit</button>
                  <button onClick={editCommentClickHandler}>Cancel</button>

                  </form>
                </section>
              }

              {currentUser.id === commenterId && !editMode &&
                <>
                <button onClick={editCommentClickHandler}>
                  <i className="fa fa-pencil-square-o"></i>
                </button>
                <button onClick={removeCommentClickHandler}>
                  <i className="fa fa-trash"></i>
                </button>
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

      .commenter {
        height: 56px;
        display: flex;
        align-items: center;
        border-right: 1px solid ${colors.primary}
      }

      .commenter h3 {
        margin-right: 1rem;
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
        margin-top: 15px;
      }

      h4 {
        margin-right: 1rem;
      }

      p {
        margin: 0 1rem;
      }

      .date-container {
        margin-left: auto;
      }

      .date-container h4 {
        font-size: 0.9rem;
        border-left: 1px solid ${colors.primary};
        padding-left: 1.8rem;
      }

      button {
      /* background-color: ; */
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      margin: 1.5rem 0.5rem;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    button:focus {
      outline: none;
    }

    section#edit-comment {
      width: 85%;
      margin-left: 1rem;
    }

    form#edit-form {
      display: flex;
    }
    
    textarea {
      width: 100%;
      font: inherit;
      padding: 0.5rem;
    }
  
    `}</style>

  </>
  )
}

// Comment.getInitialProps = async ctx => {
//   getCommentData
// }

export default Comment;