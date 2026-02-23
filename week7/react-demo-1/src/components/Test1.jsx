function Test1({message, time}) {
    // props => properties
    return (
        <div className="bg-amber-400 mb-2 p-2">
            <h1>{message}</h1>
            <p>{time}</p>
        </div>
    )
}

export default Test1;