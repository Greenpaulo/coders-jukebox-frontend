import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

class Searchbar extends React.Component {
  
  state = {
    searchInput: '',
    mode: this.props.user,
    filteredUser: []
  }
  
  onChangeHandler = (e) => {
    // setSearchInput(e.target.value);
    this.setState({searchInput: e.target.value})
    console.log(this.state.searchInput);
  
    if ( this.state.mode === "user") {
      const f = allUsers.filter(user => {
        // console.log(user.name.substr(0, searchInput.length).toUpperCase())
        // console.log(searchInput.toUpperCase())
        return  user.name.substr(0, searchInput.length).toUpperCase() === searchInput.toUpperCase()
      }  
      )
  
      console.log(f)
  
    }
  }
  
  onFormSubmit = (e) => {
    e.preventDefault();
  
    // Call the relevant submit handler from props
    // submitHandler(searchInput);
  }
  
  
  render(){
    const {placeholder, searchMode, submitHandler} = this.props;
      return (
        <div id="main-searchbar">
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="search-input">
              <svg id="search-icon" height="24" viewBox="0 0 24 24" width="24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            </label>
            <input type="text" name="search-input" placeholder={placeholder} onChange={this.onChangeHandler} value={this.state.searchInput}/>
          </form>
        </div>
      )
  }




  // const { allUsers } = useContext(GlobalContext);

  // console.log(allUsers);



  // const [filteredUsers, setFilteredUsers] = useState([])


}



export default Searchbar;
