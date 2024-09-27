
import './App.css';
import Profile from './components/Profile';

function App() {
  const profiles = [{
    name:"huzaif",
    img:"https://img.etimg.com/thumb/width-1200,height-900,imgsize-101990,resizemode-75,msid-93641036/industry/renewables/gas-powered-muscle-cars-drive-into-the-sunset-turn-electric.jpg",
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
    <div>
      <h1>profile</h1>{
          profiles.map((profile, key) => {
          return <Profile key={key} name={profile.name} imgUrl={profile.img} about={profile.about}/>    
        })
      } 
      
    </div>
  );
}

export default App;
