import { useForm } from 'react-hook-form'

function FormDemo() {
    const {register, handleSubmit, formState:{errors}} = useForm();

    //Form Submission
    function submitForm(obj) {
        console.log(obj);
    }
    
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='mb-3'>
                    <input type="text" placeholder='Username' {...register("username", {required : true})} name='username' className='border-2' />
                    {
                        errors.username?.type === "required" ? <p className='text-red-600'>Username is required</p>
                        : <p className='text-red-600'>Enter more than 3</p>
                    }
                </div>
                <div className='mb-3'> 
                    <input type="text" placeholder='email' {...register("email")} name='email' className='border-2'/>
                </div>
                <button type='submit' className='bg-blue-400 p-3 text-lime-100'>Submit</button>
            </form>
        </div>
    )
}

export default FormDemo;