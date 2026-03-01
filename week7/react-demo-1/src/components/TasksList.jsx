
function TasksList({tasks}) {
  return (
    <div className="bg-gray-500 shadow p-4">
      <h3 className="text-4xl text-red-600 mb-4">List of Tasks</h3>
        {
            tasks.length == 0 ? 
            <p className="text-2xl">Empty Tasks</p> :
            tasks.map((m, i) => <p key={i} className="text-2xl">{m.task}</p>)
        }
    </div>
  )
}

export default TasksList
