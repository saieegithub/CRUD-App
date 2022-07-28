import react, { useState,useEffect } from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = ()=> {

    const navigate = useNavigate();
    const [userData,setUserData] = useState([]);
  

    useEffect(()=>{
     axios.get("http://localhost:5000/user")
     .then(async(res)=>{
   
       const rawData =await res.data;
       console.log(rawData);
   
       setUserData(rawData);
   
     }).catch(err=>console.log(err))
    },[]);
    
   
    console.log(userData);
    return(
        <>
       
        <div className='home-container'>
        <div><h1>Home page</h1></div>
         <div className='container'>
  <div className='row'>
    <div className='col d-flex 
    justify-content-end'>
      <NavLink exact to="/adduser">
        
      <button type="button" class=" mt-3 mb-3 me-2 pt-10 pb-10 pe-5 btn btn-success btn-sm">Add User</button>
      </NavLink>
      <NavLink exact to="/login">

      <button type="button" class=" mt-3 mb-3 pe-5  btn btn-success btn-sm">Login</button>
      </NavLink>
   
    </div>
  </div>
       
</div>
<table className="table table-striped">
<thead>
    <tr>
      
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Mobile Number</th> 
      <th scope="col">Password</th> 
      <th scope="col">Edit User</th>
      <th scope="col">Delete User</th>
    </tr>
  </thead>
  <tbody>

{
  userData.map((row,key)=>{
    return(
        
     < tr>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.mobNumber}</td>
      <td>{row.password}</td>
      <td>
        
        <button type="button" onClick={()=> navigate( `/edit/${row._id}`)} 
        class="btn btn-success btn-sm">Edit User</button>  
        </td>
      <td>
        <button type="button" onClick ={() => navigate(`/delete/${row._id}`)}
         class="btn btn-danger btn-sm">Delete User</button>
        </td>
    </tr>
    );
  })
}
  </tbody>
</table>

       <input type="text" list='option'/>
       <datalist>
        <option>option1</option>
       
       </datalist>
       </div>
        </>
    );
}

export default Home;