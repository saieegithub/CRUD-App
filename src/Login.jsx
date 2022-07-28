import axios from 'axios';
import react, {useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Login.css';

const Login =  () =>{

  
     const navigate = useNavigate();
     const [userData,setUserData] = useState([]);
     const [userEmail,setUserEmail] = useState();
     const [userPassword,setUserPassword] = useState();




    useEffect(()=>{
        axios.get("http://localhost:5000/user")
        .then((res)=>{
           console.log(res.data);
           const rawData = res.data;
           console.log(rawData);
            setUserData(rawData);

        }).catch(err=>console.log(err))
    },[])

   

    const loginHandler = (e) =>{
        e.preventDefault();
        const rawData =  userData.filter((data)=>{
            if(data.emailId == userEmail && data.password == userPassword){
                return(
                    {data}
                )
    
            }
           })
           console.log(rawData);
           const filteredData = rawData[0]._id;
           console.log(filteredData);
           navigate(`/dashboard/${filteredData}`)
    }
   

    return(
        <>
        <div className='emMain'>
        <div className='login-heading'><h1>Login page</h1></div>
        <div className='emContainer'>
       <form onSubmit={loginHandler}>
        <div className='email-box'>
        <input className='email' type="email" placeholder='email' onChange={(e) => setUserEmail(e.target.value)} value={userEmail}/>
        <input className='pass' type="password" placeholder='password'onChange={(e) => setUserPassword(e.target.value)} value={userPassword}/>
        <button type='submit'>Login</button>
        </div>
       
       </form>
       </div>
       </div>
        </>
    );
};

export default Login;