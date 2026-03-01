import { useState } from 'react';
import {useForm} from 'react-hook-form'

function FormDisplay() {
    const {register, handleSubmit, setError, formState : {errors}} = useForm();
    const [users, setData] = useState([]);

    //form submit
    function formSubmit(obj) {
        //the date id not after 2020
        setError("dob", {
            type : "manual",
            message : "Date not after 2020"
        });
        //{errors.dob?.type === "manual" && <p>{errors.dob.message}</p>}

        setData([...users, obj]);
    }

    return (
        <div>
            <div className="bg-pink-400 w-100">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className='flex flex-col p-4'>
                        <h1>User Registration Form</h1>
                        <input type="text" className='border-2 bg-gray-400 mt-4' placeholder="Enter First Name" {...register("fname", {required : true, minLength : 4, maxLength : 6})}  name="fname"/>
                        {
                            errors.fname?.type === "required" && <p className='text-red-700'>First Name is Required</p>
                        }
                        {
                            errors.fname?.type === "minLength" && <p className='text-red-700'>Enter Min 4</p>
                        }
                        {
                            errors.fname?.type === "maxLength" && <p className='text-red-700'>Enter Max 6</p>
                        }
                        <input type="text" className='border-2 bg-gray-400 mt-4' placeholder="Enter Last Name" {...register("lname", {required : true, minLength : 4, maxLength : 6})}  name="lname"/>
                        {
                            errors.lname?.type === "required" && <p className='text-red-700'>First Name is Required</p>
                        }
                        {
                            errors.lname?.type === "minLength" && <p className='text-red-700'>Enter Min 4</p>
                        }
                        {
                            errors.lname?.type === "maxLength" && <p className='text-red-700'>Enter Max 6</p>
                        }
                        <input type="date" className='border-2 bg-gray-400 mt-4' placeholder="Enter email" {...register("email", {min : '21-09-2020'})}  name="email"/>
                        {
                            errors.email?.type === "max" && <p className='text-red-700'>greater then 2020</p>
                        }
                        <input type="text" className='border-2 bg-gray-400 mt-4' placeholder="Enter Date of Birth" {...register("dob")}  name="dob"/>
                        <button type='submit' className='bg-amber-300 w-50 h-10 mt-4'>submit</button>
                    </div>
                </form>
            </div>
            <div className="bg-pink-400 w-100 mt-5 h-80 mb-30 p-5">
                <div>List Of Users</div>
                <table className='w-full border'>
                    <thead>
                        <th className='border p-1'>First Name</th>
                        <th className='border p-1'>Last Name</th>
                        <th className='border p-1'>Email</th>
                        <th className='border p-1'>Dob</th>
                    </thead>
                    <tbody>
                        {
                            users.map((d, idx) => <tr className='border p-1'>
                                    <td className='border p-1'>{d.fname}</td>
                                    <td className='border p-1'>{d.lname}</td>
                                    <td className='border p-1'>{d.email}</td>
                                    <td className='border p-1'>{d.dob}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FormDisplay;