import React from 'react';

const AddUsers = () => {
    const handleSubmit=(event)=>{
           event.preventDefault();
           const form =event.target;
           const gender=form.gender.value;
           const status=form.status.value;
           console.log(gender,status);
    }
    return (

        <form onSubmit={handleSubmit} className='md:w-9/12 mx-auto'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>New User</h1>
                <p>Use the below form to create a new account</p>
            </div>

            <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input rounded-sm" />
            </div>
            <div className="form-control">
                <label className="label">
                <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input rounded-sm" />
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
    );
};

export default AddUsers;