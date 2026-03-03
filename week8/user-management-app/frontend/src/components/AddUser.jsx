import { useState } from 'react';
import { useForm } from 'react-hook-form'

function AddUser() {
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [message, setMessage] = useState("");

    async function onUserSubmit(data) {
        console.log(data);

        try {
            let res = await fetch("http://localhost:5000/user-api/users", {
                method : "POST",
                body : JSON.stringify(data),
                headers : {
                    "Content-Type" : "application/json"
                }
            });
            let resObj = await res.json();
            console.log("hello",resObj);
            setMessage(resObj?.message);
            console.log(message)
        }catch(err) {            
            setError(err.message);
            console.log("Error is", err);
            setMessage(resObj.message);
        }finally {
            setLoading(false);
        }
    }

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1 className='text-red-600'>{error}</h1>

  return (
    <div className='border p-10 w-100 flex-col justify-center align-middle mt-3'>
    <h1 className='text-amber-950 text-2xl'>Add User</h1>
        {!message?<></>:<h1 className='text-red-600'>{message}</h1>}
      <form onSubmit={handleSubmit(onUserSubmit)}>
            <div>
                <input type="text" {...register("name")} className='border-2 border-gray-500 rounded-md p-2 m-2' placeholder='Name'/>
                <input type="text" {...register("email")} className='border-2 border-gray-500 rounded-md p-2 m-2' placeholder='Email'/>
                <input type="text" {...register("dob")} className='border-2 border-gray-500 rounded-md p-2 m-2' placeholder='Date of birth'/>
                <input type="text" {...register("mobileNumber")} className='border-2 border-gray-500 rounded-md p-2 m-2' placeholder='Mobile No'/>
            </div>
            <button className='w-50 bg-amber-100 rounded-2xl cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default AddUser
