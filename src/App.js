// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
 

  const [user,setUser]=useState([]);
  const getUser = async()=>
  {
    const response=await fetch('https://mocki.io/v1/b6244d84-5737-4dfa-ae74-9cb1fb0493a1');
    //console.log(response)
     setUser(await response.json());
    
  }

   useEffect(() => {
    getUser();
    
   
  }, [])
  const display = Object.entries(user).map(( item) => {
    return (
      <div className="my-posts">
        <h6 key={item[1]}>
         {item}
        </h6>
      </div>
      );
    });





    // {

    //   user.map((anything)=>{
    //     return <div key={user.id}>
    //       <h2>{anything.title}</h2>
    //       <h4>{anything.url}</h4>
    //     </div>
    //   })
    // } 
  return (
<>

    <div className="App" key={user.id}>

     <h1> {display}</h1>
    </div>
    </>
  );
  
}

export default App;
