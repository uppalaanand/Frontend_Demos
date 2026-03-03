import { useEffect, useState } from "react"
import { useNavigate } from "react-router";

function UserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        async function getUsers() {
            setLoading(true);
            try {
                let res = await fetch("http://localhost:5000/user-api/users");
                let result = await res.json();
                setUsers(result.payload);
                console.log(result.payload)
            }catch(err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        }
        getUsers();
    }, []);


    //navigate to user component
  const gotoUser = (userObj) => {
    //navigate logic
    //while navigatoing transfer user obj too
    navigate("/user", {state:{user : userObj}});
  }

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1 className='text-red-600'>{error}</h1>

  return (
    <div className="gap-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
        {
          users.map((user, idx) => <div key={idx} onClick={(u) => gotoUser(u)} className="shadow flex flex-col align-middle justify-center text-center rounded-2xl p-5 cursor-pointer">
            <h1>{user.name}</h1>
        </div>)
        }
      </div>
    </div>
  )
}

export default UserList
