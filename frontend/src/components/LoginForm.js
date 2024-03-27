import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { useLogin } from '../hooks/useLogin'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useLogin();
    const navigate = useNavigate()

    // set the username value and reset error text
    const handleUsernameChange = (e) => {
        const loginError = document.querySelector('.error');
        setUsername(e.target.value);
        loginError.innerHTML = '';
    }

    // set the password value and reset error text
    const handlePasswordChange = (e) => {
        const loginError = document.querySelector('.error');
        setPassword(e.target.value);
        loginError.innerHTML = '';
    }

    // call the login user api route and login user if correct information
    const handleLogin = async (e) => {
        e.preventDefault();

        // attempt to login the user via inputs
        const loginResult = await login(username, password);

        // if successful, navigate to home page
        if (loginResult) {
            navigate('/');
        }
    }

    return (
        <div className="form-container">

            {/* FORM */}
            <form onSubmit={handleLogin} method="GET">
                {/* Form Heading */}
                <div className="form-header">
                    <h3 className="form-heading">Welcome Back to Univents!</h3>
                    <p className="form-heading-text">Please login with your information.</p>
                    <hr />
                </div>

                {/* Form body (input) */}
                <div className="form-body">
                    {/* username input */}
                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter username"
                        onChange={handleUsernameChange}/>
                    </div>

                    {/* password input */}
                    <div className="form-section">
                        <label htmlFor="password1">Password</label>
                        <input type="password" name="password1" id="password1" placeholder="Enter password"
                        onChange={handlePasswordChange}/>
                    </div>

                    <p className="error"></p>

                    {/* login button */}
                    <div className="form-section">
                        <input type="submit" value="Login"/>
                    </div>
                </div>

                {/* Form footer */}
                <div className="no-account">
                    <p>Don't have an account? <Link to="/account-type">Create Account</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
