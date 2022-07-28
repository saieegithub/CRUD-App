import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import './Edit.css'

const Edit = () =>{

     const navigate = useNavigate();

       const {userID} = useParams();
       console.log(userID);
       const [firstName,setFirstName] = useState("");
       const [lastName,setLastName] = useState("");
       const [mobNumber,setMobNumber] = useState();
       const [password,setPassword] = useState("");
       const [userData,setUserData] = useState();
         


       useEffect(()=>{
        axios.get(`http://localhost:5000/user/${userID}`)
        .then(async(res) =>{
            const rawData = await res.data[0];
            console.log(rawData);
            
            setFirstName(rawData.firstName);
            setLastName(rawData.lastName);
            setMobNumber(rawData.mobNumber);
            setPassword(rawData.password);

            setUserData(rawData);

        }).catch(err =>console.log(err))
       },[])

       const updateHandler = (e)=>{
        e.preventDefault();

        const dataObj = {
          firstName,
          lastName,
          mobNumber,
          password
        }

        axios.put(`http://localhost:5000/user/${userID}`,dataObj)
        .then(res =>{
          alert("User Updated");
          navigate("/home");

        }).catch(err =>{
            alert(err);
        })

       }

    return(
        <>
        <div className='edit-container'>
        <div className='edit-page'><h1>Edit Page</h1></div>
        <div className='edit-inner'>
        <div className='container-md mt-3'>
<form onSubmit = {updateHandler} >
<div className="row-main">
  <div className="row">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"
    onChange = {(e) => setFirstName(e.target.value)}
    value={firstName}/>
  </div>
  <div className="row">
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
    onChange = {(e) => setLastName(e.target.value)}
    value={lastName}/>
  </div>
  <div className="row">
    <input type="number" className="form-control" placeholder="Mob Number" aria-label="Mob Number"
    onChange = {(e) => setMobNumber(e.target.value)}
    value={mobNumber}/>
  </div>
  <div className="row">
    <input type="password" className="form-control" placeholder="Password" aria-label="Password"
    onChange = {(e) => setPassword(e.target.value)}
    value={password}/>
  </div >
  <div  className="row">
  <button className='btn-update' type="submit">Update User</button>
  </div>
</div>

</form>
</div>
</div>
</div>
        </>
    );
};

export default Edit;
