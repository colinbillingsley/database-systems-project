import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";

const Login = () => {
    return (
        <div className="login">
            {/* Navbar */}
            <Nav />
            <div className="landing-content-container">
                {/* Welcome text with image background */}
                <Welcome />
                {/* Login Form */}
                <div className="form-container">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login
