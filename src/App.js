import React,{useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';

function App() {
  
const [data,setdata] = useState([])
const [error,setError] = useState({})
const listFunction=(par)=>{setdata([par,...data.filter(item=>item.indexOf(par)===-1)])}
const errorFunction=(par)=>{setError(par)}

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search listFunction={listFunction} errorFunction={errorFunction}/>
        <Error error={error}/>
        <ResidentsList data={data}/>
      </div>
    </div>
  );
}

export default App;
