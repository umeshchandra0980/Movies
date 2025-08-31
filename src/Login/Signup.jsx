import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import "./signup.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmitSuccess = (data) => {
    const jwt_token = data.jwt_token;
    Cookies.set("jwt_token", jwt_token, { expires: 30 });
    navigate("/Netflix");
  };

  const onSubmitFailure = (msg) => {
    setError(msg);
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username: fullname, email, password };

    const url = "https://apis.ccbp.in/signup"; // 🔥 change endpoint to signup API
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      onSubmitSuccess(data);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  return (
    <div className="signup-main">
      {/* Netflix-style dark background */}
      <div className='img-container'>
 <img  className="logo" src="https://res.cloudinary.com/dzrn93bir/image/upload/v1752054023/Copilot_20250709_150907_fur3jd.png"  alt="App Logo"/>  
  </div>
         
      <div className="overlay"></div>
      <div className="signup-container">
       

        <form className="signup-form" onSubmit={submitForm}>
          <h2>Create your account</h2>

          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">*{error}</p>}

          <button type="submit">Sign Up</button>
          <p className="switch-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Sign In</span>
          </p>
        </form>
      </div>
    </div>
  );
}
