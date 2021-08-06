import React from 'react';
import './User.css';
import user from '../reducers/user';
import store from '../store';
import { setActiveUserId } from '../action';

const User = ({user}) => {
   const {name, profile_pic, status} = user;
   
   return (
       <div className="User" onClick={handleUserClick.bind(null, user)}>
           <img src={profile_pic} alt={name} className="User_pic" />
           <div className="User_details">
               <p className="User_details-name">{name}</p>
               <p className="User_details-status">{status}</p>
           </div>
       </div>
   );
};

const handleUserClick = ({user_id}) => {
    console.log(user_id);
    store.dispatch(setActiveUserId(user.user_id));
};

export default User;