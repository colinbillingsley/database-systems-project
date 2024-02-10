import Nav from "../components/Nav"
import CreateAdStForm from "../components/CreateAdStForm"

const CreateAdStAccount = () => {
    return (
        <div className="create-adst-account">
            {/* Navbar */}
            <Nav />
            {/* Create Account Form */}
            <div className="create-adst-form-container">
                <CreateAdStForm />
            </div>
        </div>
    )
}

export default CreateAdStAccount
