import { useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import colors from '../css-variables/colors';


const FileUpload = () => {

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Upload photo - max size 70 KB');

  const { uploadFile } = useContext(GlobalContext);

  const uploadFileHandler = (e) => {
    e.preventDefault();

    // Check for max size
    if (file.size > 70000) {
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    uploadFile(formData);
  }

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }


  return (
    <div id="file-upload">
      <h2>Upload a profile photo:</h2>
      <form onSubmit={(e) => uploadFileHandler(e)}>
        <input type="file" name="file" id="file" className="custom-file-input" onChange={onChange} />
        <label htmlFor="file" className="custom-file-label">
          {filename}
        </label>
        <button type="submit" value="Upload">Upload</button>
      </form>


      <style jsx >{`
      
        #file-upload  {
          margin: 1rem 0;
          padding: 2rem 3rem;
          border-left: 1px solid ${colors.primary}
        }

        #file-upload h2 {
          margin-bottom: 1rem;
        }
      
        form {
          display: flex;
          flex-direction: column;
        }

        input[type="file"] {
          font-size: 1rem;
        }

        input#file-upload-button {
          border-radius: 5px;
          padding: 1rem;
        }

        label {
          margin: 0.5rem 0;
        }

        button {
          width: 83px;
          margin-top: 1rem;
        }
        
        input {
          margin: 1rem 0; 
        }
      
      `}</style>

    </div> 

  )
}

export default FileUpload;
