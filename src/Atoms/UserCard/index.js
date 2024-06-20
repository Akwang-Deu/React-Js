import './index.css';

const UserCard = ({image,fulName})=>{

    return(
        <div className="user-container">
        <div className=""> 
            <img src={image} alt={`${fulName} profile`}/>
            <h3>{fulName}</h3>
        </div>
        </div>
    )
}
export default UserCard;