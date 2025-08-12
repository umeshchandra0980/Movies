import  { useState } from 'react';
import { useNavigate } from 'react-router';
import './index.css';
import Cookies from 'js-cookie'

export default function Login() {
    const [username,setUseInput] = useState("")
    const [password,setpassInput] = useState("")
    const [vlaue,setValue]= useState({showsubmiterror:'',val:false})
    const navigate = useNavigate()

    const onInput = (e) => {
        setUseInput(e.target.value)
    }

    const onPassword = (e) => {
        setpassInput(e.target.value)
    }
    const onSubmitFailure = errorMsg => {
        console.log(errorMsg)
        console.log(vlaue)
        setValue(prev => ({showsubmiterror:errorMsg,val:true}))
        console.log(vlaue)
      }
      const onSubmitSuccess = (data) => {
        const jwt_token = data.jwt_token
        console.log(jwt_token)
         Cookies.set('jwt_token', jwt_token, {expires: 30});
        //  alert("Login Succuful welcome user")
        
            navigate('/Neflix'); // or set a redirect state
         
      }

    const submitForm =async (event) => {
        event.preventDefault()
        const userDetails = {username:username,password:password}
        console.log(userDetails)
        const url = 'https://apis.ccbp.in/login'
        const options = {
          method: 'POST',
          body: JSON.stringify(userDetails),
        }
   
            const response = await fetch(url,options)
            const data = await response.json()
        
   
        console.log(data)
        if (response.ok === true) {
          onSubmitSuccess(data)
       
        } else {
          onSubmitFailure(data.error_msg)
        }
    }



    
   
  return (
    <div className="main">
        <div className='img-container'>
 <img  className="logo" src="https://res.cloudinary.com/dzrn93bir/image/upload/v1752054023/Copilot_20250709_150907_fur3jd.png"  alt="App Logo"/>  
  </div>
         

      <div className="login-wrapper">
       
        <div className="login-container">
          <h2 >Login</h2>
          <form onSubmit={submitForm}> 
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={onInput} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password}  onChange={onPassword}/>

            {vlaue.val && (
          <p className="error-message">*{vlaue.showsubmiterror}</p>
        )}

            <button type="submit" >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
