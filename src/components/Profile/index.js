import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { UserPhotoContainer } from "./styles";

const Profile = ({ history, user }) => {
  const handleClick = () => {
    if (!user) {
      return;
    }

    // history.push(`/user/${user.displayName.toLowerCase().replace(/\s/g, ".")}`);
    history.push(`/user/${user.uid}`);
  };
  
  return (
    <>
      {!user ? null : (
        <UserPhotoContainer
          onClick={() => handleClick()}
        >
          {!user.photoURL ? (
            <img
              src={
                "https://i.pinimg.com/736x/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg"
              }
              alt="User Profile"
            />
          ) : (
            <img src={user.photoURL} alt="User Profile" />
          )}
        </UserPhotoContainer>
      )}
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user.currentUser,
});

export default withRouter(connect(mapStateToProps)(Profile));
