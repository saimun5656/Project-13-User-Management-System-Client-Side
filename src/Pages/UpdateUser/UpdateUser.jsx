import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
  const {_id, gender,status,name,email}=useLoaderData()
        const handleSubmit=(event)=>{
               event.preventDefault();
               const form =event.target;
               const gender=form.gender.value;
               const status=form.status.value;
               const name= form.name.value;
               const email=form.email.value;
               const newuser={gender,status,name,email}
               console.log(newuser);
               fetch(`http://localhost:3400/users/${_id}`,{
                method:"PUT",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(newuser)
               })
               .then(res=>res.json())
               .then(data=>{
                data.modifiedCount>0?
                Swal.fire({
                    title: 'Success',
                    text: 'User Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  }):''
                console.log(data);
               })
        }
        return (
         <div className='md:w-9/12 mx-auto mt-12'>
              <Link to='/'><button className='font-semibold shadow-md px-5 py-1 rounded-md bg-slate-100'>All Users</button></Link>
              <form onSubmit={handleSubmit} >
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold'>Update User</h1>
                    <p>Use the below form to create a new account</p>
                </div>
    
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input rounded-sm" name='name' defaultValue={name}/>
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" className="input rounded-sm" name='email'defaultValue={email}/>
                </div>
                <div className='w-1/3   grid grid-cols-3 my-5'>
                    <span className=''>Gender </span> 
                    <label htmlFor='gender'>
                         <input className='' type="radio" name="gender" value='male' checked={gender==='male'?true:false}/> Male
                    </label> 
                    <label>
                      <input className='border-red-300' type="radio" name="gender" value='female' checked={gender==='female'?true:false} d/> Female 
                    </label> 
                </div>
                <div className='w-1/3  grid grid-cols-3 my-5'>
                    <span className=''>Status </span> 
                    <label htmlFor='gender'>
                         <input className='' type="radio" name="status" value='active' checked={status==='active'?true:false}/> Active
                    </label> 
                    <label>
                      <input className='border-red-300' type="radio" name="status" value='inactive' checked={status==='inactive'?true:false}/> Inactive
                    </label> 
                </div>
                <input className='bg-rose-400 px-4 py-1 rounded w-full' type="submit" value="Update" />
            </form>
         </div>
        );
    
};

export default UpdateUser;