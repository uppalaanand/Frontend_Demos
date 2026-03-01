import { useEffect, useState } from "react";

function StateDemo() {
    // State
    const [counter, setCounter] = useState(0);
    const [marks, setMarks] = useState([10, 20, 30 ,40]);
    const [user, setUser] = useState({email : "test1@gmail.com", age : 20});

    function increment() {
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
        setCounter(prev=>prev+1);
    }
    function decrement() {
        setCounter(counter-1);
    }
    
    function reset() {
        setCounter(0);
    }
    
    //update marks state by inserting elements at beginning and ending and in between with index
    function addMarksE() {
        setMarks([...marks, 123]);
    }
    
    function addMarksF() {
        setMarks([124, ...marks]);
    }
    
    function addMarksM() {
        let m = Math.floor(marks.length/2);
        let mark = [...marks];
        mark.splice(m, 0, 100);
        setMarks(mark);
    }

    //delete marks from end of the array
    function delMarksE(index) {
        // setMarks(marks.slice(0, -1));
        setMarks(marks.filter((_, i) => i !== index));
    }

    //Add new Property to user
    function setUser1(){
        setUser({...user, name: "Anand"});
    }

    //delete Property
    function deleteProperty() {
        const [age, ...rest] = user;
        console.log(rest);
    }

    return (
        <div>
            <p className="text-4xl">Counter : {counter}</p>
            <button onClick={increment} className="bg-black text-2xl text-white w-20 rounded-3xl hover:text-amber-300">Inc</button>
            <button onClick={decrement} className="bg-black text-2xl text-white w-20 ml-1 rounded-3xl hover:text-amber-300">Dec</button>
            <button onClick={reset} className="bg-black text-2xl text-white w-20 ml-1 rounded-3xl hover:text-amber-300">Reset</button>
            {
                marks.map((m, id) => <p key={id}>{m}</p>)
            }
            <button onClick={addMarksF} className="bg-black text-2xl text-white w-30 ml-1 rounded-3xl hover:text-amber-300">Add Beg</button>
            <button onClick={addMarksM} className="bg-black text-2xl text-white w-30 ml-1 rounded-3xl hover:text-amber-300">Add Mid</button>
            <button onClick={addMarksE} className="bg-amber-600 text-2xl text-black w-40 ml-1 rounded hover:text-amber-300">Add At End</button>
            <button onClick={() => delMarksE(2)} className="bg-amber-600 text-2xl text-black w-40 ml-1 rounded hover:text-amber-300">Del End</button>

            <h1>User</h1>
            {
                Object.keys(user).map((u, idx) => <p key={idx}>{user[u]}</p>)
            }
            <button onClick={setUser1}>Add</button>
            <button onClick={() => deleteProperty()} className="bg-amber-600 text-2xl text-black w-40 ml-1 rounded hover:text-amber-300">Del End</button>
        </div>
    )
}

export default StateDemo;