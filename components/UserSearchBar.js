import { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const UserSearchbar = ({ placeholder, setFilteredUsers, checkSearchMode, searchInput, setSearchInput}) => {

  const { allUsers } = useContext(GlobalContext);

  useEffect(() => {
    // action on update of searchInput
      const users = allUsers.filter(user => {
        return user.name.substr(0, searchInput.length).toUpperCase() === searchInput.toUpperCase()
      })

      setFilteredUsers(users)
  }, [searchInput]);

  const onChangeHandler = (e) => {
    setSearchInput(e.target.value);
    checkSearchMode(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    // Call the relevant submit handler from props
    // submitHandler(searchInput);
  }

  return (
    <div id="main-searchbar">
      <form onSubmit={onFormSubmit} autoComplete="off">
        <label htmlFor="search-input">
          <svg id="search-icon" height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
        </label>
        <input type="text" name="search-input" placeholder={placeholder} onChange={onChangeHandler} value={searchInput} />
      </form>


      <style jsx>{`

          label {
            position: absolute;
            top: 8px;
            left: 12px;
          }
          
          #main-searchbar {
            margin: auto;
            display: flex;
            position: relative;
            width: 75%;
            font: inherit;
          }

          #main-searchbar form {
            width: 100%
          }

          #main-searchbar input {
            width: 100%;
            border-radius: 23px;
            padding: 0.6rem 0.5rem 0.5rem 2.5rem;
            font-size: 1.1rem;
            background-color: #fff;
            border: none;
          }

          #main-searchbar input :focus {
            outline: none;
          }

          /* Media queries */
          @media (max-width: 950px){
            #main-searchbar {
              margin: 0;
              width: 90%;
            }
          }

          @media (max-width: 660px){
            #main-searchbar {
              margin: auto;
            }
          }

          @media (max-width: 600px){
            #main-searchbar {
              width: 110%;
            }
          }

          @media (max-width: 420px) {
            #main-searchbar {
              width: 120%;
            }
          }

          @media (max-width: 370px) {
            #main-searchbar {
              width: 130%;
            }

            #main-searchbar input {
              font-size: 0.9rem;
            }

            label {
              top: 7px;
            }
          }
          
  
  
  `}</style>

    </div>
  )
}

export default UserSearchbar;
