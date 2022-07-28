
import react, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () =>{
  const {userID} = useParams();
  const [userData,setUserData] = useState([]);
         
  console.log(userID);

  useEffect(()=>{
    axios.get(`http://localhost:5000/user/${userID}`)
    .then(async(res) =>{
        const rawData = await res.data[0];
        console.log(rawData);
        
       
        setUserData(rawData);

    }).catch(err =>console.log(err))
   },[])

   
  return(
    <>
    <div className='dashboard'>
        Hello {userData.firstName}
    </div>
    </>
  );
};

export default Dashboard;
