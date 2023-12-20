import React from 'react';

const Profile = () => {
  const userData = {
    username: 'Damir',
    email: 'Zhardemov@mail.ru',
    firstName: 'Damir',
    lastName: 'Zhardemov',
  };

  return (
    <div className='container border border-1 my-2 p-5'>
      <h2>Profile</h2>
      <p>
        <strong>Username:</strong> {userData.username}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Name:</strong> {`${userData.firstName} ${userData.lastName}`}
      </p>
      
    </div>
  );
};

export default Profile;
