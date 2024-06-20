import { getUsers } from "../util";
import { useState, useEffect } from "react";

export const useGetUsers =() =>{
    const [users,setUsers]=useState();
    const [error, setError]= useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        async function fetchUsers(){
            try{
                setLoading(true);
                    const users = await getUsers();
                    console.log(users)
                    setUsers(users.users)
                    setLoading(false)

                }
                catch(error){
                    setError(error.message);
                    setLoading(false)
    
                }
            };
        fetchUsers();

    },[])
    return{
        users,
        loading,
        error,
    }
};