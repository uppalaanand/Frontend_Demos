import { useForm } from "react-hook-form"

function AddTask({addNewTask, deleteTask}) {
    const {register, handleSubmit, reset} = useForm();

    const onFormSubmit = (obj) => {
        addNewTask(obj);
        reset();
    }
    const onDelete = (obj) => {
        console.log(obj);
        deleteTask(obj.task);
        reset();
    }

  return (
    <div className="bg-gray-500 shadow p-4">
        <h3 className="text-red-600 text-4xl mb-10">Add Task</h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
                <input type="text" {...register("task")} placeholder="aDD NEW tASK" className="border px-1 py-1 mr-1.5" />
                <button type="submit" className="bg-amber-300 text-black px-4 py-3 rounded">Add</button>
            </div>
        </form>
        <form onSubmit={handleSubmit(onDelete)}>
            <div>
                <input type="text" {...register("task")} placeholder="aDD NEW tASK" className="border px-1 py-1 mr-1.5" />
                <button type="submit" className="bg-amber-300 text-black px-4 py-3 rounded">Delete</button>
            </div>
        </form>
    </div>
  )
}

export default AddTask;
