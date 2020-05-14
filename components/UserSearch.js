import UserSearchBar from './UserSearchBar';


const UserSearch = () => {
  return (
    <div id="user-search">
      <UserSearchBar placeholder='Search for user' searchMode='user' />
      <div id="dropdown">
        <div id="search-results">
          <ul>
            <li>Search Results</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
      
        #user-search {
          width: 50%;
          /* position: relative; */
        }

        #dropdown {
          width: 100%;
          /* position: relative; */
        }
        
        #search-results {
          width: 40%;
          margin: auto;
          background: white;
          color: purple;
          margin-top: 0.5rem; 
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 10px 10px 45px -10px rgba(66,9,66,0.74);
          position: absolute;
          /* left: 410px; */



        }

        ul {
          list-style: none;
        }
      
      
      `}</style>

    </div>
  )
}

export default UserSearch;
