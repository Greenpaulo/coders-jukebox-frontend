import { useContext, useRef, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import FileUpload from './FileUpload';
import colors from '../css-variables/colors';
import { motion, AnimatePresence } from 'framer-motion';


const editVariants = {
  hidden: { opacity: 0, y: -500, zIndex: -3},
  visible: { 
    opacity: 1,
    y: 0,
    zIndex: -3,
    transition: {
      duration: 0.5
    }
  },
  exit: { opacity: 0, y: -500, zIndex: -3 }
}


const ProfileEdit = ({setEditMode}) => {

  const { updateUser, profileUser, uploadPhoto } = useContext(GlobalContext);

  // // Fetch the updated profile info to prefill form
  // useEffect(() => {
  //   fetchProfileUser(userId, false);
  // }

  // Prefill the form with the current info
  const [ profileInfo, setProfileInfo ] = useState({
    firstName: profileUser.firstName,
    lastName: profileUser.lastName,
    jobTitle: profileUser.jobTitle,
    location: profileUser.location,
    languages: profileUser.languages,
    about: profileUser.about
  })
  
  
  // Create refs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const jobTitleRef = useRef();
  const locationRef = useRef();
  const language1Ref = useRef();
  const language2Ref = useRef();
  const language3Ref = useRef();
  const language4Ref = useRef();
  const aboutRef = useRef();

  
  const updateProfileHandler = async (e) => {
    e.preventDefault();

    // Get credentials from refs
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const jobTitle = jobTitleRef.current.value;
    const location = locationRef.current.value;
    const language1 = language1Ref.current.value;
    const language2 = language2Ref.current.value;
    const language3 = language3Ref.current.value;
    const language4 = language4Ref.current.value;
    const languages = [language1, language2, language3, language4]
    const about = aboutRef.current.value;

    // Check if any names fields are empty
    if (firstName.trim().length === 0 || lastName.trim().length === 0 ) {
      return;
    }

    // Call register action to send a post request to API and change the local and global state
    await updateUser(firstName, lastName, jobTitle, location, languages, about);

    //Close the edit profile section - set edit to false on profile page
    setEditMode(false);
    
  }

  const getExistingLanguages = () => {
    if (profileInfo.languages.length > 0) {
      return profileInfo.languages;
    }

    else return ['', '', '', '']
  } 



  return (
    <AnimatePresence>
    <motion.div variants={editVariants} initial='hidden' animate='visible' exit='exit'>
      <section id="profile-edit">
      <div id="edit-container">

        <div id="col1">
          <form onSubmit={(e) => updateProfileHandler(e)} id="update-form">
          <h2>Update Profile Info:</h2>
            <div>
              <label htmlFor="firstName">First Name: </label>
              <input type="text" id="firstName" defaultValue={profileInfo.firstName}  ref={firstNameRef} />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" defaultValue={profileInfo.lastName} ref={lastNameRef} />
            </div>
            <div>
              <label htmlFor="JobTitle">Job Title:</label>
              <input type="text" id="jobTitle" defaultValue={profileInfo.jobTitle} ref={jobTitleRef} />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" defaultValue={profileInfo.location} ref={locationRef} />
            </div>
            <div id="languages">
              <h4>Main Programming Languages Used:</h4>
              <div id="language-input-container">
                <div>
                  <label htmlFor="language1" className="language-label">1.</label>
                  <input type="text" className="language-input" id="language1" defaultValue={getExistingLanguages()[0]} ref={language1Ref} />
                </div>
                
                <div>
                  <label htmlFor="language2" className="language-label">2.</label>
                  <input type="text" className="language-input" id="language2" defaultValue={getExistingLanguages()[1]} ref={language2Ref} />
                </div>
                
                <div>
                  <label htmlFor="language3" className="language-label">3.</label>
                  <input type="text" className="language-input" id="language3" defaultValue={getExistingLanguages()[2]} ref={language3Ref} />
                </div>
                
                <div>
                  <label htmlFor="language4" className="language-label">4.</label>
                  <input type="text" className="language-input" id="language4" defaultValue={getExistingLanguages()[3]} ref={language4Ref} />
                </div>
                
              </div>
            </div>
            
          </form>
        </div>

        <div id="col2">
          <div id="about-input">
            <label htmlFor="about">About Me:</label>
            <textarea id="about" cols="30" rows="5" defaultValue={profileInfo.about} ref={aboutRef} form="update-form"/>
            <button type="submit" form="update-form">Update Info</button>
          </div>
          <FileUpload />
        </div>

        {/* <button id="cancel" onClick={() => setEditMode(false)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button> */}
          <i className="fa fa-times-circle fa-2x" id="cancel" aria-hidden="true" onClick={() => setEditMode(false)}></i>
        
      
      </div>
      </section>


      <style jsx>{`
      
        section {
          /* padding: 3rem; */
          border: 1px solid white;
          border-radius: 10px;
          margin-top: 1rem;
          z-index: -3;
        }

        #edit-container {
          display: flex;
          justify-content: space-between;
        }

        #col1 {
          padding: 3rem;
        }

        #col1 h2 {
          margin-bottom: 1rem;
        }

        input {
          background-color: #eee;
          border: none;
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
          border-radius: 5px;
        }

        textarea {
          background-color: #eee;
          width: 100%;
          padding: 12px 15px;
          margin: 8px 0;
          height: 10rem;
          border-radius: 5px;
          font-size: inherit;
          font: inherit;
        }

        #languages {
          margin-top: 1rem;
        }

        #language-input-container {
          display: grid;
          grid-template-columns 1fr 1fr;

        }

        h4 {
          font-weight: 400 ;
        }

        label.language-label {
          margin-right: 0.25rem;
        }

        input.language-input {
          width: 95%;
        }

        button[type='submit'] {
          margin-top: 1rem;
        }

        i#cancel {
          margin: 0.85rem;
          cursor: pointer;
        }

        #col2 {
          margin-top: 1rem;
          padding: 4.6rem 0 0 3rem;
          border-left: 1px solid ${colors.primary}
        }

        #about-input {
          margin-bottom: 2rem;  
        }

        /* Media queries */
        @media (max-width: 1150px) {

          #profile-edit {
            width: 90vw;
            margin: 1rem auto 1rem auto;
            position: relative;
          }

          #edit-container {
            flex-direction: column;
          }

          /* textarea {
            width: 95%;
          } */

          #col1 {
            padding-bottom: 1rem;
          }

          #cancel {
            position: absolute;
            top: 10px;
            right: 10px;
          }

          #col2 {
            margin-top: 0;
            padding: 0 3rem 3rem 3rem;
          }
        }

        @media (max-width: 778px) {
          #language-input-container {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        @media (max-width: 440px) {
          #language-input-container label{
            display: none;
          }

          #col1 {
            padding: 2rem 2rem 1rem 2rem;
          }

          #col2 {
            padding: 0 2rem 3rem 2rem;
          }
        }

        @media (max-width: 360px) {
          #cancel {
            top: -5px;
            right: -5px;
          }
        }
      
      `}</style>

    </motion.div>
    </AnimatePresence>
  )
}

export default ProfileEdit;