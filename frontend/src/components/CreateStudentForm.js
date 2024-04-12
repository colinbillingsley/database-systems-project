import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const CreateStudentForm = () => {
    const [success, setSuccess] = useState(false);
    const [university, setUniversity] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const role = '0';
    const navigate = useNavigate();

    const resetFields = () => {
        setUniversity('');
        setUsername('');
        setEmail('');
        setPassword('');
        setSuccess(false);
    }

    // call api to get uni_id from university inputted
    const getUniId = async () => {
        const baseUrl = 'http://localhost:3500/university/api';
        try {
            // call the api to get the uni_id
            const response = await axios.get(`${baseUrl}/${university}`);

            // get the id and return it
            const uniId = response.data.uni_id;
            return uniId;
        } catch (error) {
            console.log("error finding university");
            return null;
        }
    }

    // call api to create user with inputs and uni_id
    const createUser = async () => {
        const baseUrl = 'http://localhost:3500/user/api/users/create';
        const createError = document.querySelector('.login-error');
        try {
            // get the id from inputted university
            const uni_id = await getUniId();

            // if university exists, create student user
            const response = await axios.post(`${baseUrl}`, {username, password, role, email, uni_id});
            return true;
                } catch (error) {
            if (createError) {
                createError.innerHTML = error.response.data.error;
            }
            return false;
        }
    }

    
    const handleSubmit = async (e) => {        
        e.preventDefault();

        // insert the input for user in db
        const userCreated = await createUser();

        // if user was successfully inserted in db, go to login
        if (userCreated) {
            // event sucessfully added
            setSuccess(true);

            // hide menu and clear input after 2 seconds
            setTimeout(() => {
                resetFields();
                navigate('/login');
            }, 2000)
        }
    }

    // set the username value and reset error text
    const handleUsernameChange = (e) => {
        const createError = document.querySelector('.login-error');
        setUsername(e.target.value);
        createError.innerHTML = '';
    }

    // set the password value and reset error text
    const handlePasswordChange = (e) => {
        const createError = document.querySelector('.login-error');
        setPassword(e.target.value);
        createError.innerHTML = '';
    }

    // set the email value and reset error text
    const handleEmailChange = (e) => {
        const createError = document.querySelector('.login-error');
        setEmail(e.target.value);
        createError.innerHTML = '';
    }

    // set the university value and reset error text
    const handleUniversityChange = (e) => {
        const createError = document.querySelector('.login-error');
        setUniversity(e.target.value);
        createError.innerHTML = '';
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} method="POST">
                <div className="form-header">
                    <h3 className="form-heading">Create Account - Student</h3>
                    <p className="form-heading-text">Please fill out the information below to create an account.</p>
                    <hr />
                </div>

                {/* Form body (input) */}
                <div className="form-body">
                    {/* university input */}
                    <div className="form-section">
                        <label htmlFor="university">University</label>
                        <input type="text" name="university" id="university" placeholder="Enter university" onChange={handleUniversityChange}/>
                    </div>

                    {/* username input */}
                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter username" onChange={handleUsernameChange}/>
                    </div>

                    {/* email input */}
                    <div className="form-section">
                        <label htmlFor="email">School Email</label>
                        <input type="text" name="email" id="email" placeholder="Enter school email" onChange={handleEmailChange}/>
                    </div>

                    {/* password input */}
                    <div className="form-section">
                        <label htmlFor="password1">Password</label>
                        <input type="password" name="password1" id="password1" placeholder="Enter password" onChange={handlePasswordChange}/>
                    </div>

                    {success
                        ? <p className="success">User created successfully! Navigating back to login page.</p>
                        : ''
                    }

                    <p className="login-error"></p>

                    {/* create account button */}
                    <div className="form-section">
                        <input type="submit" value="Create Account" />
                    </div>
                </div>

                {/* Form footer */}
                <div className="have-account">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default CreateStudentForm
