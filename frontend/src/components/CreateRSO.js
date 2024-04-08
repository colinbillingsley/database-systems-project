import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateRSO = () => {
    const [rsoName, setRsoName] = useState('');
    const [rsoType, setRsoType] = useState('');
    const [rsoPhone, setRsoPhone] = useState('');
    const [rsoEmail, setRsoEmail] = useState('');
    const [rsoDesc, setRsoDesc] = useState('');
    const { user } = useAuthContext();

    const HandleCancelClick = (e) => {
        e.preventDefault();
        const createRSO = document.querySelector('.create-rso-wrapper');
        const textFields = document.querySelectorAll('.create-rso-text-field');
        const selectFields = document.querySelectorAll('.create-rso-select-field');

        // reset text fields
        textFields.forEach(field => {
            field.value = "";
        });

        selectFields.forEach(field => {
            field.value = field.options[0].value;
        });
        // hide the rso menu
        createRSO.classList.add('hidden');

        const createError = document.querySelector('.error');
        createError.innerHTML = '';
    }

    const handleCreateClick = async (e) => {
        e.preventDefault();

        const baseUrl = 'http://localhost:3500/rso/api/rso/create';
        try {
            const response = await axios.post(baseUrl, {name: rsoName, created_by: user.uid, type: rsoType, desc: rsoDesc, email: rsoEmail, number: rsoPhone, status: 'Inactive'});
            console.log("Rso created");
            console.log(response);
        } catch (error) {
            console.log("error creating rso");
            console.log(error);
            const createError = document.querySelector('.error');
            createError.innerHTML = error.response.data.error;
        }
    }

    // set the name value and reset error text
    const handleNameChange = (e) => {
        const createError = document.querySelector('.error');
        setRsoName(e.target.value);
        createError.innerHTML = '';
    }

    // set the type value and reset error text
    const handleTypeChange = (e) => {
        const createError = document.querySelector('.error');
        setRsoType(e.target.value);
        createError.innerHTML = '';
    }

    // set the phone value and reset error text
    const handlePhoneChange = (e) => {
        const createError = document.querySelector('.error');
        setRsoPhone(e.target.value);
        createError.innerHTML = '';
    }

    // set the email value and reset error text
    const handleEmailChange = (e) => {
        const createError = document.querySelector('.error');
        setRsoEmail(e.target.value);
        createError.innerHTML = '';
    }

    // set the description value and reset error text
    const handleDescChange = (e) => {
        const createError = document.querySelector('.error');
        setRsoDesc(e.target.value);
        createError.innerHTML = '';
    }

    return (
        <div className="create-rso">
            <div className="create-rso-wrapper hidden">
                <div className="create-rso-header">
                    <h2>Create RSO</h2>
                    <p>Please fill out the information below to request to create an RSO.</p>
                    <hr />
                </div>

                <div className="create-rso-main">
                    <form onSubmit={handleCreateClick} method="POST">
                        <div className="create-rso-in-line-section">
                            {/* rso name */}
                            <div className="form-section">
                                <label htmlFor="rso-name">RSO Name</label>
                                <input onChange={handleNameChange} className="create-rso-text-field" type="text" name="rso-name" id="rso-name" placeholder="Enter RSO name" />
                            </div>

                            {/* type selection */}
                            <div className="form-section">
                                <label htmlFor="rso-type">RSO Type</label>
                                <select onChange={handleTypeChange} className="create-rso-select-field" name="rso-type" id="rso-type" >
                                    <option disabled selected value> -- Select an RSO Type  -- </option>
                                    <option value="Organization">Organization</option>
                                    <option value="Club">Club</option>
                                    <option value="Fraternity">Fraternity</option>
                                    <option value="Sorority">Sorority</option>
                                </select>
                            </div>
                        </div>

                        <div className="create-rso-in-line-section">
                            {/* contact phone number */}
                            <div className="form-section">
                                <label htmlFor="rso-phone-number">Contact Phone Number</label>
                                <input onChange={handlePhoneChange} className="create-rso-text-field" type="text" name="rso-phone-number" id="rso-phone-number" placeholder="Example: 000-000-0000" />
                            </div>

                            {/* contact email */}
                            <div className="form-section">
                                <label htmlFor="rso-email">Contact email</label>
                                <input onChange={handleEmailChange} className="create-rso-text-field" type="text" name="rso-email" id="rso-email" placeholder="Example: abc@gmail.com" />
                            </div>
                        </div>

                        {/* rso description */}
                        <div className="form-section">
                            <label htmlFor="rso-description">RSO Description</label>
                            <textarea onChange={handleDescChange} className="create-rso-text-field" name="rso-description" id="rso-description" rows="10" placeholder="Enter a description of the RSO..." ></textarea>
                        </div>

                        <div className="form-section">
                            <p className="rso-disclaimer">Your RSO must have at least 5 registered students at the university to become active. Otherwise, the RSO will be listed as inactive. </p>
                        </div>

                        <p className="error"></p>
                        <p className="success"></p>

                        {/* create/cancel buttons */}
                        <div className="form-section btn-section">
                            <button className="cancel-btn" onClick={HandleCancelClick}>Cancel</button>
                            <button className="create-btn" type="submit">Create RSO</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateRSO
