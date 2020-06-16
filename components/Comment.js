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
            
          <div className="avatar">
            <div className="avatar-crop">
              {commentUser.profilePhotoFilename !== null && commentUser.profilePhotoFilename !== '' &&
                <img src={`http://localhost:5000/image/${commentUser.profilePhotoFilename}`} alt="avatar" />
              }
            </div>
          </div>
          
          <div className="commenter">
            <Link href="/profile/[userId]" as={`/profile/${commenterId}`}>
              <a onClick={commenterClickHandler}><h3>{commentUser.firstName} {commentUser.lastName}</h3></a>
            </Link>
          </div>
              
          {!editMode && 
            <p>{comment.content}</p>
          }
        </div>      

        {!editMode && 
          <div className="date-container">
            {currentUser.id === commenterId && !editMode &&
              <div className="comment-btns">
                <button onClick={editCommentClickHandler}>
                  <i className="fa fa-pencil-square-o"></i>
                </button>
                <button onClick={removeCommentClickHandler}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            }
            <div className="date-time">
              {convertDate(comment.createdAt).map(date => {
                return <h4 className="date" key={date}>{date}</h4>
              })}
            </div>
          </div>
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

      </div>

    </>

    

      <style jsx>{`

      .comment {
        display: flex;
        justify-content: space-between;
        width: 100%;
        border: 1px solid black;
        border-radius: 5px;
        margin: 1rem 0;
        background-color: white;
      }

      .commenter {
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid ${colors.primary}
      }

      .commenter h3 {
        margin: 0 1rem;
      }

      .content {
        display: flex;
        width: 100%;
        padding: 1.2rem 0 1.2rem 1.2rem;
        align-items: center;
      }

      .comment-info {
        display: flex;
        width: 100%;
        align-items: center;
        margin-left: 1rem;
      }

      .avatar {
        max-height: 50px;
      }

      .avatar-crop {
        max-width: 50px;
        max-height: 50px;
        overflow: hidden;
        border-radius: 50%;
      }

      img {
        max-width: 50px;
        max-height: 75px;
      }

      h4 {
        margin-right: 1rem;
        text-align: center;
      }

      p {
        margin: 0 1.5rem;
        overflow: hidden;
      }

      .date-container {
        margin: 1rem 0 1rem auto;
        display: flex;
        flex-direction: column;
        border-left: 1px solid ${colors.primary};
        padding-right: 0.5rem;
      }

      .date-time {
        margin-top: 0.5rem;
      }

      .date-container h4 {
        font-size: 0.9rem;
        padding: 0 1rem 0 1.5rem;
        width: 100%;
      }

      .comment-btns {
        display: flex;
        height: 40px;
        margin: 0 auto;
        padding-left: 1.15rem;

      }

      button {
      background-color: white;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      position: relative;
    }

    i {
      position: absolute;
      color: ${colors.primary};
      font-size: 1.5rem;
    }

    i.fa-pencil-square-o {
      top: 8px;
      left: -2px;
    }

    i.fa-trash {
      top: 6px;
      left: 0px;
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