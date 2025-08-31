import { useState } from "react";
import { useNavigate } from "react-router";
import "./index.css";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUseInput] = useState("");
  const [password, setpassInput] = useState("");
  const [vlaue, setValue] = useState({ showsubmiterror: "", val: false });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onInput = (e) => setUseInput(e.target.value);
  const onPassword = (e) => setpassInput(e.target.value);

  const onSubmitFailure = (errorMsg) => {
    setValue({ showsubmiterror: errorMsg, val: true });
  };

  const onSubmitSuccess = (data) => {
    const jwt_token = data.jwt_token;
    Cookies.set("jwt_token", jwt_token, { expires: 30 });
    navigate("/Neflix");
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const userDetails = { username, password };
    const url = "http://localhost:3006/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   // ✅ REQUIRED
      },
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok === true) {
      onSubmitSuccess(data);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  return (
    <div className="main">
      <div className="img-container">
        <img
        
          className="logo"
          src="https://res.cloudinary.com/dzrn93bir/image/upload/v1752054023/Copilot_20250709_150907_fur3jd.png"
          alt="App Logo"
        />
      </div>

      <div className="login-wrapper">
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={submitForm}>
            <label htmlFor="username">Username</label>
            <input id="username" value={username} onChange={onInput} />

            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onPassword}
              />
              <span
                className="toggle-eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {vlaue.val && (
              <p className="error-message">*{vlaue.showsubmiterror}</p>
            )}

            <button type="submit">Login</button>
          </form>
          <p className="p23">
            New To Movies ? <a href="/signup">Sign up Now</a>
          </p>
        </div>
      </div>
    </div>
  );
}
