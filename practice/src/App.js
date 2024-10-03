
import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react'

function App() {
  // // const profiles = [{
  // //   name:"huzaif",
  // //   img:"https://avatars.githubusercontent.com/u/182518533?v=4",
  // //   about:"i'm a student"
 
  // // },
  // // {
  // //   name:"samit",
  // //   img:"https://w7.pngwing.com/pngs/411/398/png-transparent-cartoon-driving-vehicle-funny-cars-convertible-driving-hand-thumbnail.png",
  // //   about:"i'm a student"
  // // },
  // //   {
  // //     name:"rehan",
  // //     img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkg3hpLfoaq2F8RD2ILtDmgk_2LNSatY5Mg&s",
  // //     about:"i'm a student"
  // // }];
  // const [profiles, setProfiles] = useState([]);
const [data, setData] = useState({
  name: "",
  age: "",
  city: "",
  plus: ""
});

const [isEmpty, setIsEmpty] = useState(true);

const updateName =(e) => {
  setData({...data,name: e.target.value})
  setIsEmpty((e.target.value == '' && data.age == '' && data.city == '') ? true : false)
}
const updateAge =(e) => {
  setData({...data,age: e.target.value})
  setIsEmpty(( data.name == '' && e.target.value == '' && data.city == '' ) ? true : false)
}
const updateCity =(e) => {
  setData({...data,city: e.target.value})
  setIsEmpty((data.name == '' && data.age == '' && e.target.value == '') ? true : false)
}

return (
  <div className="container">
    { isEmpty ?
    <h1>No Data...</h1>
    :
    <>
    {
      data.name != '' ?
      <h1>Name: {data.name}</h1>
      :
      <></>
    }
    {
      data.age != '' ?
      <h1>Age: {data.age}</h1>
      :
      <></>
    }
     {
      data.city != '' ?
      <h1>City: {data.city}</h1>
      :
      <></>
     }  
    </>
    }
    <input placeholder='name' type="text" onChange={updateName} />
    <input placeholder='age' type="text" onChange={updateAge}/>
    <input placeholder='city' type="text" onChange={updateCity} />
  </div>
)
  // useEffect(
  //   () => {
  //     fetch ('/data/profiles.json')
  //     .then(response => response.json())
  //     .then(data => setProfiles.json(data))
  //     .catch(error => console.error("Error fetching the profiles:",error));
  //   },[])
  // return (
  //   <div className="container">
  //     <div className="row">
  //     <h1>profile</h1>
  //     {
  //       profiles.map((profile, key) => {
  //         return <Profile key={key} profile={profile} />    
  //       })
  //     } 
  //   </div>
  //   </div>
  // );
}

export default App;
