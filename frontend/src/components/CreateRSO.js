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
                            <p className="rso-disclaimer">Your RSO must have at least 5 registered students at the university to become active. Otherwise, the RSO will be listed as inactive. </p>
                        </div>

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
