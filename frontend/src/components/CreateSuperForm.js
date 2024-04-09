import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const CreateSuperForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [university, setUniversity] = useState('');
    const [uniAddress, setUniAddress] = useState('');
    const [studentPop, setStudentPop] = useState('');
    const [uniDesc, setUniDesc] = useState('');
    const role = '2';
    const navigate = useNavigate();
 
    // call api to create university based on inputs
    const createUni = async () => {
        // get the domain from the email input
        const domain = email.substring(email.indexOf('@'));

        const baseUrl = 'http://localhost:3500/university/api/create';

        const NOstudents = parseInt(studentPop);
        const uni_name = university;
        const desc = uniDesc;
        const location = uniAddress;

        try {
            // call the api to insert the university into the db
            const response = await axios.post(`${baseUrl}`, {uni_name, desc, location, NOstudents, domain});
            console.log("university created");
            return true;
        } catch (error) {
            console.log("error creating university")
            return false;
        }
    }

    // call api to get uni_id from university created
    const getUniId = async () => {
        const baseUrl = 'http://localhost:3500/university/api';
        try {
            // call the api to get the uni_id
            const response = await axios.get(`${baseUrl}/${university}`);

            // get the id and return it
            const uniId = response.data.uni_id;
            return uniId;
        } catch (error) {
            return null;
        }
    }

    // call api to create user with inputs and uni_id
    const createUser = async () => {
        const baseUrl = 'http://localhost:3500/super_admin/api/register';
        const createError = document.querySelector('.login-error');
        try {
            // get the university id from input
            const uni_id = await getUniId();

            // call the api to insert user into db
            const response = await axios.post(`${baseUrl}`, {username, password, role, email, uni_id});
            console.log("success creating user");
            return true;
        } catch (error) {
            console.log("error creating user");
            if (createError) {
                createError.innerHTML = error.response.data.error;
            }
            return false;
        }
    }

    // create the university and user
    const handleSubmit = async (e) => {
        e.preventDefault();

        // insert the input for university in db
        const uniCreated = await createUni();
        // insert the input for user in db
        const userCreated = await createUser();

        // if university and user were successfully inserted in db, go to login
        if (uniCreated && userCreated) {
            navigate('/login');
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

    // set the university address value and reset error text
    const handleUniAddressChange = (e) => {
        const createError = document.querySelector('.login-error');
        setUniAddress(e.target.value);
        createError.innerHTML = '';
    }

    // set the university description value and reset error text
    const handleUniDescChange = (e) => {
        const createError = document.querySelector('.login-error');
        setUniDesc(e.target.value);
        createError.innerHTML = '';
    }

    // set the student population value and reset error text
    const handleStudentPopChange = (e) => {
        const createError = document.querySelector('.login-error');
        setStudentPop(e.target.value);
        createError.innerHTML = '';
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} method="POST">
                {/* Form header */}
                <div className="form-header">
                    <h3 className="form-heading">Create Account - Super Admin</h3>
                    <p className="form-heading-text">Please fill out the information below to create an account.</p>
                    <hr />
                </div>

                <div className="super-form-body-container">
                    {/* Form body (input) */}
                    <div className="form-body">
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
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="Enter password" onChange={handlePasswordChange}/>
                        </div>

                        {/* university input */}
                        <div className="form-section">
                            <label htmlFor="uni_name">University</label>
                            <input type="text" name="uni_name" id="uni_name" placeholder="Enter university name" onChange={handleUniversityChange}/>
                        </div>

                        {/* address input */}
                        <div className="form-section">
                            <label htmlFor="location">University Address</label>
                            <input type="text" name="location" id="location" placeholder="Enter university address" onChange={handleUniAddressChange}/>
                        </div>

                        {/* student population input */}
                        <div className="form-section">
                            <label htmlFor="NOstudents">Student Population</label>
                            <input type="text" name="NOstudents" id="NOstudents" placeholder="Enter student population" onChange={handleStudentPopChange}/>
                        </div>
                    </div>

                    <div className="super-descr-container">
                            {/* university description */}
                            <div className="form-section">
                                <label htmlFor="desc">University Description</label>
                                <textarea className="super-textarea" name="desc" id="desc" rows="26" placeholder="Enter a description of the university..." onChange={handleUniDescChange}></textarea>
                            </div>
                        </div>
                </div>

                <p className="login-error"></p>

                {/* create account button */}
                <div className="form-section">
                            <input type="submit" value="Create Account" />
                    </div>

                {/* Form footer */}
                <div className="have-account">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default CreateSuperForm
