import { useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';


const FileUpload = () => {

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Upload photo - max size 55 KB');

  const { uploadFile } = useContext(GlobalContext);

  const uploadFileHandler = (e) => {
    e.preventDefault();

    // Check for max size
    if (file.size > 55000) {
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
    <div>
      <form onSubmit={(e) => uploadFileHandler(e)}>
        <input type="file" name="file" id="file" className="custom-file-input" onChange={onChange} />
        <label htmlFor="file" className="custom-file-label">
          {filename}
        </label>
        <input type="submit" value="Upload" />
      </form>


  <style jsx >{`
  
    form {
      display: flex;
      flex-direction: column;
    }

    input {
      margin: 1rem 0; 
    }
  
  
  `}</style>


    </div>
  )
}

export default FileUpload;
