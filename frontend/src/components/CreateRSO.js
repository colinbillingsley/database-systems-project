const CreateRSO = () => {

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
                    <form action="" method="POST">
                        <div className="create-rso-in-line-section">
                            {/* rso name */}
                            <div className="form-section">
                                <label htmlFor="rso-name">RSO Name</label>
                                <input className="create-rso-text-field" type="text" name="rso-name" id="rso-name" placeholder="Enter RSO name" required/>
                            </div>

                            {/* type selection */}
                            <div className="form-section">
                                <label htmlFor="rso-type">RSO Type</label>
                                <select className="create-rso-select-field" name="rso-type" id="rso-type" required>
                                    <option disabled selected value> -- Select an RSO Type  -- </option>
                                    <option value="organization">Organization</option>
                                    <option value="club">Club</option>
                                    <option value="fraternity">Fraternity</option>
                                    <option value="sorority">Sorority</option>
                                </select>
                            </div>
                        </div>

                        <div className="create-rso-in-line-section">
                            {/* contact phone number */}
                            <div className="form-section">
                                <label htmlFor="rso-phone-number">Contact Phone Number</label>
                                <input className="create-rso-text-field" type="text" name="rso-phone-number" id="rso-phone-number" placeholder="Example: 000-000-0000" required/>
                            </div>

                            {/* contact email */}
                            <div className="form-section">
                                <label htmlFor="rso-email">Contact email</label>
                                <input className="create-rso-text-field" type="text" name="rso-email" id="rso-email" placeholder="Example: abc@gmail.com" required/>
                            </div>
                        </div>

                        {/* rso description */}
                        <div className="form-section">
                            <label htmlFor="rso-description">RSO Description</label>
                            <textarea className="create-rso-text-field" name="rso-description" id="rso-description" rows="10" placeholder="Enter a description of the RSO..." required></textarea>
                        </div>

                        <div className="form-section">
                            <p className="rso-disclaimer">Your RSO must have at least 4 registered students at the university. Please list their usernames below: </p>
                        </div>

                        <div className="create-rso-in-line-section">
                            {/* member 1 */}
                            <div className="form-section">
                                <label htmlFor="rso-student1">Student1 Username</label>
                                <input className="create-rso-text-field" type="text" name="rso-student1" id="rso-student1" placeholder="Enter username of student1" required/>
                            </div>

                            {/* member 2 */}
                            <div className="form-section">
                                <label htmlFor="rso-student2">Student2 Username</label>
                                <input className="create-rso-text-field" type="text" name="rso-student2" id="rso-student2" placeholder="Enter username of student2" required/>
                            </div>
                        </div>

                        <div className="create-rso-in-line-section">
                            {/* member 3 */}
                            <div className="form-section">
                                <label htmlFor="rso-student3">Student3 Username</label>
                                <input className="create-rso-text-field" type="text" name="rso-student3" id="rso-student3" placeholder="Enter username of student3" required/>
                            </div>

                            {/* member 4 */}
                            <div className="form-section">
                                <label htmlFor="rso-student4">Student4 Username</label>
                                <input className="create-rso-text-field" type="text" name="rso-student4" id="rso-student4" placeholder="Enter username of student4" required/>
                            </div>
                        </div>

                        {/* create/cancel buttons */}
                        <div className="form-section btn-section">
                            <button className="cancel-btn" onClick={HandleCancelClick}>Cancel</button>
                            <button className="create-btn" type="submit">Create Event</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateRSO
