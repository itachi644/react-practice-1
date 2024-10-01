
import './App.css';
import Profile from './components/Profile';

function App() {
  const profiles = [{
    name:"huzaif",
    img:"https://avatars.githubusercontent.com/u/182518533?v=4",
    about:"i'm a student"
 
  },
  {
    name:"samit",
    img:"https://w7.pngwing.com/pngs/411/398/png-transparent-cartoon-driving-vehicle-funny-cars-convertible-driving-hand-thumbnail.png",
    about:"i'm a student"
  },
    {
      name:"rehan",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkg3hpLfoaq2F8RD2ILtDmgk_2LNSatY5Mg&s",
      about:"i'm a student"
  }];
  return (
    <div className="container">
      <div className="row">
      <h1>profile</h1>
      {
        profiles.map((profile, key) => {
          return <Profile key={key} profile={profile} />    
        })
      } 
    </div>
    </div>
  );
}

export default App;
