import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const CreateRSO = ({getAllRSOs, getUserRSOs}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [rsoName, setRsoName] = useState('');
    const [rsoType, setRsoType] = useState('');
    const [rsoPhone, setRsoPhone] = useState('');
    const [rsoEmail, setRsoEmail] = useState('');
    const [rsoDesc, setRsoDesc] = useState('');
    const { user } = useAuthContext();

    const resetFields = () => {
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

        setRsoName('');
        setRsoType('');
        setRsoPhone('');
        setRsoEmail('');
        setRsoDesc('');
        setError(false);
        setErrorMessage('');
    }

    // method to handel when user presses cancel button
    const handleCancelClick = (e) => {
        e.preventDefault();
        resetFields();
    }

    // method to create rso and insert into db
    const createRSO = async () => {
        const baseUrl = 'http://localhost:3500/rso/api/rso/create';
        try {
            const uni_id = user.uni_id;
            const response = await axios.post(baseUrl, {uni_id, name: rsoName, created_by: user.uid, type: rsoType, desc: rsoDesc, email: rsoEmail, number: rsoPhone, status: 'Inactive'});
            console.log("Rso created");
            console.log(response);
            return response.data.rsoId;
        } catch (error) {
            console.log("error creating rso");
            console.log(error);
            setError(true);
            setErrorMessage(error.response.data.error);
        }
    }

    // join RSO
    const joinRSO = async (rso_id) => {
        const baseUrl = 'http://localhost:3500/rso/api/rso/join';
        await axios.post(`${baseUrl}/${rso_id}/${user.uid}`)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
                return null;
            })
    }

    const handleCreateClick = async (e) => {
        e.preventDefault();

        try {
            // create the rso and get the id
            const rso_id = await createRSO();

            // if id received make the user who created the rso a member
            if (rso_id) {
                joinRSO(rso_id);

                // event sucessfully added
                setSuccess(true);

                // hide menu and clear input after 2 seconds
                setTimeout(() => {
                    resetFields();
                    setSuccess(false);
                    getAllRSOs();
                    getUserRSOs();
                }, 2000)
            }

        } catch (error) {
            console.log("error creating rso process");
            setError(true);
            setErrorMessage(error.response.data.error);
        }
    }

    // set the name value and reset error text
    const handleNameChange = (e) => {
        setRsoName(e.target.value);
        setError(false);
        setErrorMessage('');
    }

    // set the type value and reset error text
    const handleTypeChange = (e) => {
        setRsoType(e.target.value);
        setError(false);
        setErrorMessage('');
    }

    // set the phone value and reset error text
    const handlePhoneChange = (e) => {
        setRsoPhone(e.target.value);
        setError(false);
        setErrorMessage('');
    }

    // set the email value and reset error text
    const handleEmailChange = (e) => {
        setRsoEmail(e.target.value);
        setError(false);
        setErrorMessage('');
    }

    // set the description value and reset error text
    const handleDescChange = (e) => {
        setRsoDesc(e.target.value);
        setError(false);
        setErrorMessage('');
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

                        {error
                        ?   <p className="error">{errorMessage}</p>
                        :   ''
                        }

                        {success
                            ? <p className="success">RSO created successfully! It has been sent for approval</p>
                            : ''
                        }

                        {/* create/cancel buttons */}
                        <div className="form-section btn-section">
                            {success
                            ?
                                ''
                            :
                                <>
                                    <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
                                    <button className="create-btn" type="submit">Create RSO</button>
                                </>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateRSO
