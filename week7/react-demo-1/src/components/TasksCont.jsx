
function TasksCont({tasks}) {
    // console.log(tasks);
  return (
    <div className="bg-gray-500 shadow p-4">
      <h3 className="text-red-600 text-4xl mb-4">Tasks Count</h3>
      <p className="text-3xl">{tasks.length}</p>
    </div>
  )
}

export default TasksCont
