import {React} from 'react';
import Nav from './components/Nav';
import { useNavigate } from 'react-router-dom';

const Customers = (props) => {
  const navigate = useNavigate();
  const navigateToConfirmed = (post) =>{
    navigate("/customers/"+post._id+"/"+post.name, { state: post}); 
 }
    return(
        <>
        <Nav />
        <h1 className='text-yellow-400 text-4xl text-center my-5'>CUSTOMERS</h1>
        <div className="flex flex-col h-screen">
              <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                  <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="sm:px-1 md:px-6 py-3 text-xs font-bold sm:text-center md:text-left text-gray-500 uppercase "
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="sm:px-1 md:px-6 py-3 text-xs font-bold sm:text-center md:text-left text-gray-500 uppercase "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="sm:px-1 md:px-6 py-3 text-xs font-bold sm:text-center md:text-left text-gray-500 uppercase "
                          >
                            Balance
                          </th>
                          <th
                            scope="col"
                            className=" py-3 sm:px-1 md:px-6 text-xs font-bold sm:text-center md:text-left text-gray-500 uppercase"
                          >
                            Click To Send Money
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">

                        {props.data.map((item, i) => (
                            <tr key={i}>
                                <td className='sm:px-1 md:px-6 py-4 sm:text-center md:text-left text-sm text-white whitespace-nowrap'>{item.name}</td>
                                <td className='sm:px-1 md:px-6 py-4 sm:text-center md:text-left text-sm text-white whitespace-nowrap'>{item.email}</td>
                                <td className='sm:px-1 md:px-6 py-4 sm:text-center md:text-left text-sm text-white whitespace-nowrap'>{item.current_balance}</td>
                                <td className='sm:px-1 md:px-6 py-4 sm:text-center md:text-left text-sm text-white whitespace-nowrap'><button onClick={()=>navigateToConfirmed(item)}> Click to View </button></td>
                            </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default Customers;