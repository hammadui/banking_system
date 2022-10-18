import React from 'react';

function SingleDetail(props){
  const data = props.data;
  const[text,setText]  = React.useState(''); 
  const[reciever,setReciever]  = React.useState(''); 
  const sender = props.record._id;
  const [change,setChange] = React.useState(true);

  const handleSubmit = (e) => {
    fetch("https://bankingsystem22.herokuapp.com/api/transfer", {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify({text,sender,reciever}) 
    })
    fetch("https://bankingsystem22.herokuapp.com/api/transfer_history", {
      method: "POST",
      headers: {"Content-Type": "application/JSON"},
      body: JSON.stringify({text,sender,reciever}) 
    })
  }

  const handleChange = event => {
    setReciever(event.target.value);
    setChange(false);

  };
    return(
      <>
      <h1 className='text-yellow-400 text-4xl text-center my-5'>TRANSFER</h1>
      <div className='w-full h-screen '>
        <form className="pt-5 px-10 text-xl border md:mx-[300px] mt-10 text-left" onSubmit={handleSubmit} action="https://bankingsystem22.herokuapp.com/#/customers" >
        <div className='text-white'>
        
            <div className='mb-7 md:mb-10 mt-5'>
            <label className='px-1'>Name: </label>
            <h1 className='inline'>{props.record.name}</h1><br></br>
            </div>
            <div className='mb-7 md:mb-10'>
            <label className='px-1'>Balance: </label>
            <h1 className='inline'>{props.record.current_balance}</h1><br></br>
            </div>
            <div className=' flex justify-between'>
            <label className='md:inline px-1'>Select Reciever: </label>
            <div className="inline ">
            <select value={reciever} onChange={handleChange} className="sm:w-[170px] md:w-[200px] text-black appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">               
              <option disabled={true} value="">Choose User</option>
               {data.map((item,i)=>{
                    if(item.name != props.record.name)
                      return <option key={i}>{item.name}</option>
                    else{
                      return null;
                    }
                  }
                  )}
            </select>
            </div>
          </div>
          <br></br>

          <div className='mb-7 md:mb-10 flex justify-between'>
          <label className='sm:mb-5 md:inline px-1'>ENTER AMOUNT: </label>
          <input className='text-black rounded-md w-[200px] h-10 text-xl text-center' max={props.record.current_balance} min={1} type="number" value= {text} required  onChange={(e)=>setText(e.target.value)} ></input>
          </div>
        </div>
        <div className="mb-7 md:mb-10 text-center py-5">
        <button disabled={change} className='bg-black sm:w-[200px] md:w-[250px] sm:h-10 md:h-[50px] rounded-md font-bold text-white hover:scale-105 hover:text-yellow-400 duration-500' type="submit">Transfer</button>
        </div>
        </form>
        </div>   
        </>    



    );
}
export default SingleDetail;