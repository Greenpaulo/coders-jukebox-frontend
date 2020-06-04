import { useState} from 'react';

const Searchbar = ({ placeholder, submitHandler }) => {

  const [searchInput, setSearchInput] = useState('');


  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Call the relevant submit handler from props
    submitHandler(searchInput);
  }

  return (
    <div id="main-searchbar">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="search-input">
          <svg id="search-icon" height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
        </label>
        <input type="text" name="search-input" placeholder={placeholder} onChange={onChangeHandler} value={searchInput} />
      </form>


      <style jsx >{`

          label {
            position: absolute;
            top: 10px;
            left: 12px;
          }
          
          #main-searchbar {
            margin: auto;
            display: flex;
            position: relative;
          }

          #main-searchbar input {
            width: 100%;
            border-radius: 23px;
            padding: 0.6rem 0.5rem 0.5rem 2.3rem;
            font-size: 1.1rem;
            border: none;
            background-color: #eee;
          }

          #main-searchbar input :focus {
            outline: none;
          }
  
  
  `}</style>

    </div>
  )
}

export default Searchbar;
