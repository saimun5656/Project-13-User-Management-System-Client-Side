import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { FaEdit } from "react-icons/fa";
import { AiOutlineUserDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { useState } from 'react';
function App() {
  const loadeduser =useLoaderData();
  const [user,setUser]=useState(loadeduser)
  const deleteUser = (id)=>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3400/users/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          data.deletedCount>0?Swal.fire(
            'Deleted!',
            'user has been deleted.',
            'success'
          ):''
          const remaining=user.filter(us=>us._id!==id);
          setUser(remaining)
          console.log(data);
        })
        .catch()
      }
    })
     
  }
  console.log(user);
  return (
    <div className='md:w-9/12 mx-auto my-12'>
      <Link to='/add-user'><button className='font-semibold shadow-md px-5 py-1 rounded-md bg-slate-100'>New user</button></Link>


      <div className="overflow-x-auto mt-5">
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
              <Link to={`/update-user/${us._id}`}><button  className='me-8 text-xl hover:text-rose-500'><FaEdit/></button></Link>
              <button onClick={()=>deleteUser(us._id)}  title='delete user' className='text-2xl hover:text-rose-500'><AiOutlineUserDelete/></button></td>
           </tr>)
           }
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default App
