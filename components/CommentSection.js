import { useContext, useState } from 'react';
import Comment from './Comment';
import { GlobalContext } from '../context/GlobalContext';



const CommentSection = ({ profileUser }) => {

  console.log(profileUser.playlistComments)

  const { addComment} = useContext(GlobalContext);

  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  }
  
  const commentSubmitHandler = (e) => {
    e.preventDefault();
    addComment(content);
  }


  return (
    <section id="comment-section">
      <h2>Comments</h2>
      <form onSubmit={(e) => commentSubmitHandler(e)}>
        <label htmlFor="comment-input">Add a comment</label>
        <textarea name="comment-input" id="comment-input" value={content} cols="30" rows="5" onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>

      {profileUser.playlistComments.length === 0 && 
        <h3>Be the first to add a comment!</h3>
      }


      {profileUser.playlistComments.map(comment => (
        <Comment comment={comment} />
      )
      )}


      <style jsx>{`
    
      section#comment-section {
        margin: 3rem 0;
        padding: 3rem;
        border: 1px solid white;
        border-radius: 10px; 
      }

      form {
        margin: 1rem 0;
      }

      textarea {
        width: 100%;
      }
    
    `}</style>

    </section>
  )
}

export default CommentSection;