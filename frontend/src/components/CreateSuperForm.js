import { Link } from "react-router-dom"
import { useState } from "react";

const CreateSuperForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [university, setUniversity] = useState('');
    const [uniAddress, setUniAddress] = useState('');
    const [studentPop, setStudentPop] = useState('');
    const [uniDesc, setUniDesc] = useState('');

    const handleSubmit = async (e) => {
        const role = 2;

        e.preventDefault();

        console.log(`Role: ${role} (Super Admin)\nUsername: ${username}\nEmail: ${email}\nPassword: ${password}\nUniversity: ${university}\nUniversity Address: ${uniAddress}\nPopulation: ${studentPop}\nUniversity Description: ${uniDesc}\n`)
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
                            <input type="text" name="username" id="username" placeholder="Enter username" onChange={(e) => {setUsername(e.target.value)}}/>
                        </div>

                        {/* email input */}
                        <div className="form-section">
                            <label htmlFor="email">School Email</label>
                            <input type="text" name="email" id="email" placeholder="Enter school email" onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>

                        {/* password input */}
                        <div className="form-section">
                            <label htmlFor="password1">Password</label>
                            <input type="password" name="password1" id="password1" placeholder="Enter password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>

                        {/* university input */}
                        <div className="form-section">
                            <label htmlFor="university">University</label>
                            <input type="text" name="university" id="university" placeholder="Enter university name" onChange={(e) => {setUniversity(e.target.value)}}/>
                        </div>

                        {/* address input */}
                        <div className="form-section">
                            <label htmlFor="address">University Address</label>
                            <input type="text" name="address" id="address" placeholder="Enter university address" onChange={(e) => {setUniAddress(e.target.value)}}/>
                        </div>

                        {/* student population input */}
                        <div className="form-section">
                            <label htmlFor="population">Student Population</label>
                            <input type="text" name="population" id="population" placeholder="Enter student population" onChange={(e) => {setStudentPop(e.target.value)}}/>
                        </div>
                    </div>

                    <div className="super-descr-container">
                            {/* university description */}
                            <div className="form-section">
                                <label htmlFor="description">University Description</label>
                                <textarea className="super-textarea" name="description" id="description" rows="26" placeholder="Enter a description of the university..." onChange={(e) => {setUniDesc(e.target.value)}}></textarea>
                            </div>
                        </div>
                </div>

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
