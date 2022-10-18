import React from 'react';
import Nav from './components/Nav';
const Transfer= (props) =>{
    return(
        <>
        <Nav />
        <h1 className='text-yellow-400 text-4xl text-center my-5'>Transfers</h1>
        <div className="flex flex-col h-screen">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Sender Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Reciever Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Transferred Amount
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {props.transfers.map((item, i) => (
                      <tr key={i}>
                          <td className='px-6 py-4 text-sm text-white whitespace-nowrap'>{item.sender_name}</td>
                          <td className='px-6 py-4 text-sm text-white whitespace-nowrap'>{item.reciver_name}</td>
                          <td className='px-6 py-4 text-sm text-white whitespace-nowrap'>{item.transferred_amount}</td>
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
export default Transfer;