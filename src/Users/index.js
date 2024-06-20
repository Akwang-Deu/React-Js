import {useGetUsers} from "./hooks/useGetUsers";
import UserCard from "../Atoms/UserCard";

function Users(){
    const {users,loading,error} = useGetUsers();
    console.log('users...',users);
    return(


        <div>
            {loading && <h2>loading users...</h2> }
            {users.length > 0 && ! loading?
                users.map((user)=>(
                    <UserCard
                    image = {user.image}
                    fulName = { `${user.firstName} ${user.lastName}`}
                    key = {user.id}
                    />
                  
                ))
                :!loading && <h2>No users found</h2>}
                {error.length >0 && <h2>Error:{error}</h2>}
            

        </div>
    );
}

export default Users;