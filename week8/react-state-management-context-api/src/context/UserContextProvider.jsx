import React, { useState } from 'react'
import { UserContext } from './UserContext'

function UserContextProvider({children}) {
    const data = {
        name : "anand",
        age : 20,
        email: "ravi@gmail.com"
    }
    const [user, setUser] = useState(data);

    function changeName(name){
        setUser({...user, name});
    }

  return (<UserContext.Provider value={{user, changeName}}>
    {children}
  </UserContext.Provider>)
}

export default UserContextProvider;
