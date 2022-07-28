import react from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Delete.css';

const Delete = () =>{

    const {userID} = useParams(); 
    const navigate = useNavigate();

    const deleteHandler = () =>{
        axios.delete(`http://localhost:5000/user/${userID}`)
        .then((res) =>{
            alert("User Deleted Successfully");
            navigate("/home");
        }).catch(err =>{
            alert(err);
        })

    }

    return(
        <div className='delete-main'>
        <div className='delete-Container'>

        <button className='btn-delete' onClick={deleteHandler} >Delete</button>
        <button className='btn-cancel' onClick = {() => navigate("/home")}>Cancel</button>
        
        </div>
        </div>

    );
};

export default Delete;