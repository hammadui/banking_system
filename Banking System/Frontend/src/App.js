import {useEffect,useState,React} from 'react';
import Home from './Home';
import {Link, Route,Routes} from 'react-router-dom';
import Customers from './Customers';
import Transfer from './Transfer'
import Detail from './components/Detail'

function App() {
    const [data,setData]=useState([]);
    const getCustomers=()=>{
      fetch('https://bankingsystem22.herokuapp.com/api/get-data'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }
    getCustomers();

    const [transfers,setTransfer]=useState([]);
    const getTransfers=()=>{
      fetch('https://bankingsystem22.herokuapp.com/api/get-transfers'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setTransfer(myJson)
        });
    }
    getTransfers();
    
  return (
    <div className='bg-gradient-to-tr from-pink-900 to-blue-600'>
   <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/customers" element={<Customers data={data} />}></Route>
      <Route path="/customers/:_id/:name" element={<Detail data={data} />}></Route>
      <Route path="/transfers" element={<Transfer transfers={transfers}/>}></Route>
    </Routes>
    </div>
  );
}
export default App;
