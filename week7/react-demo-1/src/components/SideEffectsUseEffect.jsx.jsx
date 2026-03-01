import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function SideEffectsUseEffect() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      async function getUsers() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            // Throw error manually
            // if(response.status == 200) {
            //   throw new Error("Burre.....");
            // }
            let data = await response.json();
            setUsers(data);
            console.log(data);
        }catch(err) {
            setError(err.message);
        }finally{
          setLoading(false);
        }
      }
      getUsers();
      }, []);

      //Check loading
      if(loading==true){
        return <p>loading....</p>
      }

      //Check if any errors exist
      if(error) {
        return <p className='text-red-600'>{error}</p>
      }
      
  return (
    <div>
      SideEffects
    </div>
  )
}

export default SideEffectsUseEffect;
