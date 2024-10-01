import React from "react";
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/button';


const Profile = ({profile}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={profile.img} />
            <Card.Body>
            <Card.Title>huzaif's profile</Card.Title>
            <Card.Text>
              im a student
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
    )
}
export default Profile;
{/* <div className='profile'>
<p className='name'>profile name is {profile.name}</p>
<img className='profile-img' src={profile.img} alt={profile.img} />
<p className='about'>{profile.about}</p>      
</div>  */}