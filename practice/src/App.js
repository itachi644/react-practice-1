
import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react'

function App() {
  const initialData = {
    reasult: "",
    number1: "",
    number2: "",
  };

  const [data, setData] = useState(initialData)
  const [histories, setHistory] = useState([])


  const UpdateResult = (action) => {
    if (action == 'add') {
      const newResult = data.number1 + data.number2;
      setData({ ...data, Result: newResult });
      const newHistory = data.number1 + " + " + data.number2 + " = " + newResult;
      setHistory((prevHistory) => [newHistory, ...prevHistory]);

    } else if (action == 'sub') {
      if (data.number1 >= data.number2) {
        const newResult = data.number1 - data.number2;
        setData({ ...data, Result: newResult });
        const newHistory = data.number1 + " - " + data.number2 + " = " + newResult;
        setHistory((prevHistory) => [newHistory, ...prevHistory]);
      }
      else {
        alert(data.number1 + " should be greater than " + data.number2)
      }
    }

    else if (action == 'mult') {
      setData({ ...data, Result: data.number1 * data.number2 });
      const newResult = data.number1 * data.number2;
      setData({ ...data, Result: newResult });
      const newHistory = data.number1 + " * " + data.number2 + " = " + newResult;
      setHistory((prevHistory) => [newHistory, ...prevHistory]);
    }

    else if (action == 'div') {
      setData({ ...data, Result: data.number1 / data.number2 });
      const newResult = data.number1 / data.number2;
      setData({ ...data, Result: newResult });
      const newHistory = data.number1 + " / " + data.number2 + " = " + newResult;
      setHistory((prevHistory) => [newHistory, ...prevHistory]);
    }

    else {
      setData(initialData)
    }
  }

  const UpdateNumber1 = (e) => {
    setData({ ...data, number1: e.target.value });
    setData({ ...data, number1: parseInt(e.target.value) })
  }
  const UpdateNumber2 = (e) => {
    setData({ ...data, number2: e.target.value });
    setData({ ...data, number2: parseInt(e.target.value) })
  }

  return (
    <div className='container m-5'>
      <div className='row'>
        <div className='col-md-8'>
          <div className="card">
            <div className='card-header'>Results: {data.Result}</div>
            <div className='card-body'>
              <div className="dis-f">
                <label>Input number</label>
                <input className="m-4" type="number" placeholder="number" onChange={UpdateNumber1} value={data.number1} />
                <label>Input number</label>
                <input className="m-4" type="number" placeholder="number" onChange={UpdateNumber2} value={data.number2} />
              </div>
              <div className="dis-f">
                <input className="m-4 p-3 fs-1" type="button" value={"+"} placeholder="Value Two" onClick={() => UpdateResult('add')} />
                <input className="m-4 p-3 fs-1" type="button" value={"-"} placeholder="Value Two" onClick={() => UpdateResult('sub')} />
                <input className="m-4 p-3 fs-1" type="button" value={"*"} placeholder="Value Two" onClick={() => UpdateResult('mult')} />
                <input className="m-4 p-3 fs-1" type="button" value={"/"} placeholder="Value Two" onClick={() => UpdateResult('div')} />
                <input className="m-4 p-3 fs-1" type="button" value={"c"} placeholder="Value Two" onClick={() => UpdateResult('c')} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>History</div>
            <div className='card-body'>
              {
                histories.length == 0 ?
                  <p>No History Found.</p>
                  :
                  <>
                    <ol>
                      {
                        histories.map((history, key) => {
                          return <li key={key}>{history}</li>
                        })
                      }
                    </ol>
                    <input type="button" value="clear" onClick={() => setHistory([])} />
                  </>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // <div className='row'>
  //   <div className="card p-3">
  //     <h1>Results: {data.Result}</h1>
  //     <div className="dis-f">
  //       <label>Input number</label>
  //       <input className="m-5" type="number" placeholder="number" onChange={UpdateNumber1} value={data.number1} />
  //       <label>Input number</label>
  //       <input className="m-5" type="number" placeholder="number" onChange={UpdateNumber2} value={data.number2} />
  //     </div>
  //     <div className="dis-f">
  //       <input className="m-4 p-3 fs-1" type="button" value={"+"} placeholder="Value Two" onClick={() => UpdateResult('add')} />
  //       <input className="m-4 p-3 fs-1" type="button" value={"-"} placeholder="Value Two" onClick={() => UpdateResult('sub')} />
  //       <input className="m-4 p-3 fs-1" type="button" value={"*"} placeholder="Value Two" onClick={() => UpdateResult('mult')} />
  //       <input className="m-4 p-3 fs-1" type="button" value={"/"} placeholder="Value Two" onClick={() => UpdateResult('div')} />
  //       <input className="m-4 p-3 fs-1" type="button" value={"c"} placeholder="Value Two" onClick={() => UpdateResult('c')} />
  //     </div>
  //   </div>
  // </div>
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
  // const [data, setData] = useState({
  //   name: "",
  //   age: "",
  //   city: "",
  //   plus: ""
  // });

  // const [isEmpty, setIsEmpty] = useState(true);

  // const updateName =(e) => {
  //   setData({...data,name: e.target.value})
  //   setIsEmpty((e.target.value == '' && data.age == '' && data.city == '') ? true : false)
  // }
  // const updateAge =(e) => {
  //   setData({...data,age: e.target.value})
  //   setIsEmpty(( data.name == '' && e.target.value == '' && data.city == '' ) ? true : false)
  // }
  // const updateCity =(e) => {
  //   setData({...data,city: e.target.value})
  //   setIsEmpty((data.name == '' && data.age == '' && e.target.value == '') ? true : false)
  // }

  // return (
  // <div className="container">
  //   { isEmpty ?
  //   <h1>No Data...</h1>
  //   :
  //   <>
  //   {
  //     data.name != '' ?
  //     <h1>Name: {data.name}</h1>
  //     :
  //     <></>
  //   }
  //   {
  //     data.age != '' ?
  //     <h1>Age: {data.age}</h1>
  //     :
  //     <></>
  //   }
  //    {
  //     data.city != '' ?
  //     <h1>City: {data.city}</h1>
  //     :
  //     <></>
  //    }  
  //   </>
  //   }
  //   <input placeholder='name' type="text" onChange = {updateName}/>
  //   <input placeholder='age' type="text" onChange = {updateAge}/>
  //   <input placeholder='city' type="text" onChange = {updateCity}/>
  // </div>
  // )
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
