import React, { useContext } from 'react';
import { MyContext } from '../../context/MyProvider.js'

const Profile = () => {
    const context = useContext(MyContext);

    return (
        <div>
            <h1>This is the profile page</h1>
            { context.loggedIn ? 
            <div>
            <h2>Hello {context.userCred.name}</h2> 
            <h2>This is your account information</h2>
            <h3>City: {context.userCred.city}</h3>
            <h3>Age: {context.userCred.age}</h3>
            </div>
            : 
            <></> }
        </div>
    );
};

export default Profile;
