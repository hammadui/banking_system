import React from 'react';
import Nav from './Nav';
import SingleDetail from "./SingleDetail"
import {useLocation} from 'react-router-dom'


function Detail(props) {
  const location  = useLocation();
  React.useEffect(()=>{
    console.log(location);
  },[])
  return (
    <>
    <Nav />
    <SingleDetail record={location.state} data={props.data}/>
    </>
  );
}
export default Detail;
 