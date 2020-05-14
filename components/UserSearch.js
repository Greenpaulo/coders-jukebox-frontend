import { useState, useContext } from 'react';
import Link from 'next/Link';
import UserSearchBar from './UserSearchBar';
import { GlobalContext } from '../context/GlobalContext';


const UserSearch = () => {
  
  const [filteredUsers, setFilteredUsers] = useState([])
  
  const { fetchProfileUser } = useContext(GlobalContext);
  
  const userClickHandler = (id) => {

    fetchProfileUser(id, false);

    // Hide dropdown
    // document.getElementById('dropdown').style.display = "none";
  }

  return (
    <div id="user-search">
      <UserSearchBar placeholder='Search for user' searchMode='user' setFilteredUsers={setFilteredUsers}/>
      <div id="dropdown">
        <div id="search-results">
          <ul>
            
            {filteredUsers.map(user => (
              <li key={user.id}>
                <Link href="/profile/[userId]" as={`/profile/${user.id}`}>
                  <a onClick={userClickHandler.bind(this, user.id)}>{user.name}</a>
                </Link>
              </li>
            ))}

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
