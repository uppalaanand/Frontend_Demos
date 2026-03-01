function Test1(data) {
    // props => properties
    const {message, time} = data.data;
    return (
        <div className="bg-amber-400 mb-2 p-2">
            <h1 className="text-2xl">{message}</h1>
            <p>{time}</p>
        </div>
    )
}

export default Test1;