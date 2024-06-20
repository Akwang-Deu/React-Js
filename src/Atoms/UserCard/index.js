const UserCard = ({image,fulName})=>{

    return(
        <div>
            <img src={image} alt={`${fulName} profile`}/>
            <h3>{fulName}</h3>
        </div>
    )
}
export default UserCard