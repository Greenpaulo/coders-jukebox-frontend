import { useContext, useState } from 'react';
import Comment from './Comment';
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';




const CommentSection = ({ profileUser }) => {

  // console.log(profileUser)

  const { addComment} = useContext(GlobalContext);

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }
  
  const commentSubmitHandler = (e) => {
    e.preventDefault();
    addComment(content);
    setContent('');
  }


  return (
    <section id="comment-section">
      <h2>Comments</h2> 

      <section id="comments">
        {profileUser.playlistComments.length === 0 && 
          <h3>Be the first to add a comment!</h3>
        }

        {profileUser.playlistComments.map(comment => (
          <Comment comment={comment} key={comment._id}/>
        )
        )}
      </section>


      <section id="add-comment">
        <form onSubmit={(e) => commentSubmitHandler(e)}>
          <label htmlFor="comment-input">Add a comment</label>
          <textarea name="comment-input" id="comment-input" value={content} cols="30" rows="3" onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>


      <style jsx>{`
    
      section#comment-section {
        margin: 3rem 0;
        padding: 3rem;
        border: 1px solid black;
        border-radius: 10px;
        color: black;
        background: ${colors.gradient};
      }

      section#comments {
        margin-top: 1rem;
      }

      form {
        margin: 1rem 0;
      }

      label {
        font-weight: bold;
      }

      textarea {
        width: 100%;
        font: inherit;
        font-size: 1.1rem;
      }

      button {
      background-color: white;
      color: black;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      margin: 0.5rem 0;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
    
    `}</style>

    </section>
  )
}

export default CommentSection;