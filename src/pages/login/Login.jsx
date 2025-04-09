import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Campus Connect.</h1>
          <p>
          Your campus, your community. Stay connected, share moments, and explore student life like never before.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              name="username"
              placeholder="Username" 
              onChange={handleChange}
            />
            <input 
              type="password" 
              name="password"
              placeholder="Password" 
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
