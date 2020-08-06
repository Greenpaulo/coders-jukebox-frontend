import { useState, useContext } from 'react';
import Link from 'next/link';
import UserSearchBar from './UserSearchBar';
import { GlobalContext } from '../context/GlobalContext';


const UserSearch = () => {
  
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [searchMode, setSearchMode] = useState(false);
  
  const { fetchProfileUser } = useContext(GlobalContext);

  const [searchInput, setSearchInput] = useState('');
  
  const userClickHandler = (id) => {

    fetchProfileUser(id, false);
    
    // Hide dropdown
    setSearchMode(false)

    // Clear the search bar
    setSearchInput('');
  }

  const checkSearchMode = (input) => {
    if (input !== '') {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
  }


  return (
    <div id="user-search">
      <UserSearchBar checkSearchMode={checkSearchMode} placeholder='Search for user' searchMode='user' setFilteredUsers={setFilteredUsers} searchInput={searchInput} setSearchInput={setSearchInput}/>
      { searchMode &&
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

            {filteredUsers.length === 0 && 
              <li>No Users Found</li>
            }
          </ul>
        </div>
      </div>
      }

      <style jsx>{`
      
        #user-search {
          width: 50%;
          /* position: relative; */
        }

        #dropdown {
          width: 79%;
          /* position: relative; */
          margin: auto;
          z-index: 3;
        }
        
        #search-results {
          width: 440px;
          margin: auto;
          background: white;
          color: purple;
          margin-top: 0.5rem; 
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 10px 10px 45px -10px rgba(66,9,66,0.74);
          position: absolute;
          /* top: -10px; */
          /* z-index: 200; */

          /* left: 410px; */
        }

        ul {
          list-style: none;
        }

        /* Media queries */
      @media (max-width: 1150px) {
        #search-results {
          width: 400px;
        }
      } 

      @media (max-width: 1100px) {
        #search-results {
          width: 38vw ;
        }
      }

      @media (max-width: 950px) {
        #search-results {
          right: 170px;
          width: 46vw;
        }
      } 

      @media (max-width: 900px) {
        #search-results {
          right: 140px;
          width: 46vw;
        }
      } 
      
      @media (max-width: 900px) {
        #search-results {
          right: 120px;
        }
      }

      @media (max-width: 740px) {
        #search-results {
          right: 100px;
        }
      } 

      @media (max-width: 660px) {
        #search-results {
          right: 70px;
        }
      } 

      @media (max-width: 600px) {
        #user-search {
          margin-right: 4rem;
        }

        #search-results {
          right: 107px;
          width: 58vw;
        }
      }

      @media (max-width: 550px) {
        #user-search {
          width: 55%;
        }

        #search-results {
          width: 62vw;
          right: 91px;
        }
      }

      @media (max-width: 490px) {
        #user-search {
          width: 60%;
        }
      }

      @media (max-width: 450px) {
        #search-results {
          right: 85px;
        }
      }

      @media (max-width: 420px) {
        #user-search {
          width: 60%;
        }
        #search-results {
          right: 11vw;
          width: 76vw;
        }
      }


      
      `}</style>

    </div>
  )
}

export default UserSearch;
