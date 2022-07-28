import react,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Adduser.css';

const Adduser = ()=> {

  const navigate = useNavigate();

  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[mobNumber,setMobNumber] = useState();
  const[emailId,setEmailId] = useState();
  const[password,setPassword] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault();

    const dataObj = {
      firstName,
      lastName,
      mobNumber,
      emailId,
      password
    }
    console.log(dataObj)
    axios.post("http://localhost:5000/user",dataObj)

    setFirstName("");
    setLastName("");
    setMobNumber();
    setPassword("");

    alert("User Added Successfully")
    navigate("/home");
  }

    return(
        <>
        <div className='add-user'>
        <div className='add-user-page'><h1>Add User Page</h1></div>
<div className='container-md mt-3'>
<form onSubmit = {submitHandler}>
  <div  className='addUserIn'>
<div className="row">
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
    <input type="email" className="form-control" placeholder="Email" aria-label="Email"
    onChange = {(e) => setEmailId(e.target.value)}
    value={emailId}/>
  </div>
  <div className="row">
    <input type="password" className="form-control" placeholder="Password" aria-label="Password"
    onChange = {(e) => setPassword(e.target.value)}
    value={password}/>
  </div>
</div>
<div className="row">
<button className=" mt-3 btn btn-primary" type="submit">Submit form</button>
</div>
</div>
</form>
</div>

</div>
        </>
    );
}
export default Adduser;