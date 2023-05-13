import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { FaEdit } from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
function App() {
  const user =useLoaderData();
  console.log(user);
  return (
    <div className='md:w-9/12 mx-auto my-5'>
      <Link to='/add-user'><button className=''>New user</button></Link>


      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className='bg-gray-400 '>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
           user.map((us,idx)=><tr key={us._id}>
            <td>{idx+1}</td>
            <td>{us.name}</td>
            <td>{us.email}</td>
            <td>{us.gender}</td>
            <td>{us.status}</td>
            <td>
              <button className='me-6 text-xl'><FaEdit/></button>
              <button title='delete user' className='text-2xl'><AiOutlineUserDelete/></button></td>
           </tr>)
           }
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default App
