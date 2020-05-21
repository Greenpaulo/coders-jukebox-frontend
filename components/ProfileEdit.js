import { useContext, useRef, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import FileUpload from './FileUpload';


const ProfileEdit = ({setEditMode}) => {

  const { updateUser, currentUser, uploadPhoto } = useContext(GlobalContext);

  // Prefill the form with the current info
  const [ profileInfo, setProfileInfo ] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    jobTitle: currentUser.jobTitle,
    location: currentUser.location
  })
  
  
  // Create refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const jobTitleRef = useRef();
  const locationRef = useRef();

  
  const updateProfileHandler = async (e) => {
    e.preventDefault();

    // Get credentials from refs
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const jobTitle = jobTitleRef.current.value;
    const location = locationRef.current.value;

    // Check if any names fields are empty
    if (firstName.trim().length === 0 || lastName.trim().length === 0 ) {
      return;
    }

    // Call register action to send a post request to API and change the local and global state
    await updateUser(firstName, lastName, jobTitle, location);

    //Close the edit profile section - set edit to false on profile page
    setEditMode(false);
    
  }



  return (
    <section id="profile-edit">
      <h2>Update Profile:</h2>

      <div id="edit-container">

      <form onSubmit={(e) => updateProfileHandler(e)} id="profile-info-edit">
        <div className="form-control">
          <label htmlFor="firstName">First Name: </label>
          <input type="text" id="firstName" defaultValue={profileInfo.firstName}  ref={firstNameRef} />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" defaultValue={profileInfo.lastName} ref={lastNameRef} />
        </div>
        <div className="form-control">
          <label htmlFor="JobTitle">Job Title:</label>
          <input type="text" id="jobTitle" defaultValue={profileInfo.jobTitle} ref={jobTitleRef} />
        </div>
        <div className="form-control">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" defaultValue={profileInfo.location} ref={locationRef} />
        </div>
        <button type="submit">Update</button>
      </form>

      <FileUpload />

      </div>

     
      


      <style jsx>{`
      
        section {
          padding: 3rem;
          border: 1px solid white;
          border-radius: 10px;
          margin-top: 1rem; 
        }

        #edit-container {
          display: flex;
          justify-content: space-between;
        }

        #profile-info-edit {
          margin: 2rem 0;
        }

        button {
          margin-top: 1rem;
        }
      
      
      `}</style>


    </section>
  )
}

export default ProfileEdit;