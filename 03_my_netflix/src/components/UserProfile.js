import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const UserProfile = () => {
    return (
        <div className="UserProfile">
        <div className="User">
          <div className="name">Abhishek R Athreya</div>
          <div className="image"><FontAwesomeIcon icon={faUser}/></div>
        </div>
      </div>
    );
};

export default UserProfile;