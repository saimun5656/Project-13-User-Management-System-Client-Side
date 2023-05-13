import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddUsers = () => {
    const handleSubmit=(event)=>{
           event.preventDefault();
           const form =event.target;
           const gender=form.gender.value;
           const status=form.status.value;
           const name= form.name.value;
           const email=form.email.value;
           const newuser={gender,status,name,email}
           console.log(newuser);
           fetch('http://localhost:3400/adduser',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newuser)
           })
           .then(res=>res.json())
           .then(data=>{
            Swal.fire({
                title: 'Success',
                text: 'User added successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
            console.log(data);
           })
    }
    return (
     <div className='md:w-9/12 mx-auto mt-12'>
          <Link to='/'><button className='font-semibold shadow-md px-5 py-1 rounded-md bg-slate-100'>All Users</button></Link>
          <form onSubmit={handleSubmit} >
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>New User</h1>
                <p>Use the below form to create a new account</p>
            </div>

            <div className="form-control">
                <label className="label">
                <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input rounded-sm" name='name'/>
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your Email" className="input rounded-sm" name='email'/>
            </div>
            <div className='w-1/3   grid grid-cols-3 my-5'>
                <span className=''>Gender </span> 
                <label htmlFor='gender'>
                     <input className='' type="radio" name="gender" value='male'/> Male
                </label> 
                <label>
                  <input className='border-red-300' type="radio" name="gender" value='female'/> Female
                </label> 
            </div>
            <div className='w-1/3  grid grid-cols-3 my-5'>
                <span className=''>Status </span> 
                <label htmlFor='gender'>
                     <input className='' type="radio" name="status" value='active'/> Active
                </label> 
                <label>
                  <input className='border-red-300' type="radio" name="status" value='inactive'/> Inactive
                </label> 
            </div>
            <input className='bg-rose-400 px-4 py-1 rounded w-full' type="submit" value="Create" />
        </form>
     </div>
    );
};

export default AddUsers;