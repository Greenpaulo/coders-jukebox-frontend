import Link from 'next/link';
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
              {commentUser.profilePhotoFilename !== null && commentUser.profilePhotoFilename !== '' &&
                <Link href="/profile/[userId]" as={`/profile/${commenterId}`}>
                  <div className="crop" onClick={commenterClickHandler}>
                  </div>
                </Link>
              }
              {(commentUser.profilePhotoFilename === null || commentUser.profilePhotoFilename === '') &&
                <Link href="/profile/[userId]" as={`/profile/${commenterId}`}>
                  <div className="default-crop" onClick={commenterClickHandler}>
                  </div>
                </Link>
              }
          </div>
          
          <div className="commenter">
            <Link href="/profile/[userId]" as={`/profile/${commenterId}`}>
              <a onClick={commenterClickHandler}><h3>{commentUser.firstName} {commentUser.lastName}</h3></a>
            </Link>
          </div>
              
          {!editMode && 
              <p>{comment.content}</p>
          }

          {editMode &&
            <section id="edit-comment">
              <form id="edit-form" onSubmit={(e) => editCommentSubmitHandler(e)}>
                <textarea name="edit-comment-input" id="edit-comment-input" defaultValue={comment.content} cols="30" rows="5" ref={editedContentRef}></textarea>
                <div className="edit-btns">
                  <button type="submit">
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button onClick={editCommentClickHandler}>
                    <i className="fa fa-window-close"></i>
                  </button>
                </div>
              </form>
            </section>
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

      .default-crop {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        background-image: url('/default-avatar.jpg');
        background-size: cover;
        cursor: pointer;
      }
      .crop {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        background-image: url('http://localhost:5000/image/${commentUser.profilePhotoFilename}');
        background-size: cover;
        cursor: pointer;
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
        /* overflow-y: scroll; */
        /* height: 100px; */
        word-wrap: break-word;
        width: 650px;
      }

      .date-container {
        margin: 1rem 0 1rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-right: 0.5rem;
        border-left: 1px solid ${colors.primary};
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
      color: ${colors.primary};
      font-size: 1.5rem;
      transition: color 0.2s ease-in-out;
    }

    .comment-btns i {
      position: absolute;
    }

    i.fa-pencil-square-o {
      top: 8px;
      left: -2px;
    }

    i.fa-trash {
      top: 6px;
      left: 0px;
    }

    i:hover {
      color: #e5305a;
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

    #edit-comment button {
      height: 50px;
      padding: 0 0.5rem;
    }

    .edit-btns {
      display: flex;
    }

    i.fa-pencil {
      margin-left: 0.5rem;
    }

    i.fa-window-close {
      margin-right: 0.5rem;
    }

    /* Media queries */
    @media (max-width: 1150px ) {
      p {
        width: 400px;
      }
    }

    @media (max-width: 1070px ) {
      p {
        width: 350px;
      }
    }

    @media (max-width: 1000px ) {
      p {
        width: 300px;
      }

      .avatar {
        display: none;
      }

      .content {
        padding-left: 0.5rem;
      }

      /* .comment {
        flex-direction: column;
        justify-content: center;
      } */
    }

    @media (max-width: 860px) {
      .comment {
        display: grid;
        position: relative;
      }

      .date-container {
        position: absolute;
        top: -11px;
        right: -7px;
        border: none;
      }

      .edit-btns {
        position: absolute;
        top: 2px;
        right: 1px;
        border: none;
      }

      textarea {
        margin-top: 1.4rem;
      }

      .date-time {
        display: none;
      }
    }

    @media (max-width: 830px) {
      .content {
        display: grid;
        width: 100%;
      }

      .comment {
        display: flex;
      }

      p {
        width: 480px;
        margin-top: 1.5rem;
      }

      .avatar {
        display: block;
        position: absolute;
        top: 18px;
        left: 16px;
      }

      .commenter h3 {
        margin: 0.7rem 0rem 0rem 4.3rem;
      }

      .commenter {
        border: none;
      }

      section#edit-comment {
        width: 92%;
      }
    }

    @media (max-width: 800px ) {
      p {
        width: 59vw;
        /* margin-right: 0.5rem; */
      }
    }


    /* Media queries */
    @media (max-width: 768px ) {
      .avatar {
        /* display: none; */
      }

      .commenter {
        border-right: none;
      }
      
      p {
        /* overflow: scroll; */
        /* height: 100px; */
        /* word-wrap: break-word; */
        width: 55vw;
      }

      .content {
        display: grid;
      }
    }

    @media (max-width: 660px) {
      p {
        width: 68vw;
      }
    }

    @media (max-width: 610px) {
      section#edit-comment {
        width: 90%;
      }

      .content {
        padding-left: 0rem;
      }

      h3 {
        padding-left: 0.6rem;
      }
    }

    @media (max-width: 560px) {
      p {
        /* width: 45vw; */
        font-size: 0.9rem;
      }
    }

    @media (max-width: 500px) {
      p {
        width: 65vw;
        /* font-size: 0.9rem; */
      }

      .comment {
        padding-top: 1rem;
      }

      .avatar {
        top: 33px;
      }

    }

    @media (max-width: 440px) {
      p {
        width: 63vw;
        /* font-size: 0.9rem; */
      }
    }

    @media (max-width: 420px) {
      p {
        width: 69vw;
        /* font-size: 0.9rem; */
      }
    }

    @media (max-width: 360px) {
      p {
        width: 65vw;
        /* font-size: 0.8rem; */
        /* margin-left: 1rem; */
      }

    }

  
    `}</style>

  </>
  )
}

// Comment.getInitialProps = async ctx => {
//   getCommentData
// }

export default Comment;