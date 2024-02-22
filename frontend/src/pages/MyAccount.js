import Nav from "../components/Nav"

const MyAccount = () => {
    return (
        <div className="my-account">
            <Nav />
            <h2 className="main-heading">My Account</h2>

            <form className="account-info-form">
                {/* Form body (input) */}
                <div className="form-body">
                    {/* university input */}
                    <div className="form-section">
                        <label htmlFor="university">University</label>
                        <input type="text" name="university" id="university" value="University of user will show here"/>
                    </div>

                    {/* username input */}
                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" value="Username of user will show here"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyAccount
