import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";

const Login = () => {
    return (
        <div className="login">
            {/* Navbar */}
            <Nav />
            {/* Login Form */}
            <div className="login-form-container">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
