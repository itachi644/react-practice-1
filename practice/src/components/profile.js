import React from "react";

const Profile = ({name,imgUrl,about}) => {
    return (
        <div className='profile'>
            <p className='name'>profile name is {name}</p>
            <img className='profile-img' src={imgUrl} alt={imgUrl} />
            <p className='about'>{about}</p>      
        </div> 
        
    )
}
export default Profile;
                